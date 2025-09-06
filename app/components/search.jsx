"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import useSWR from "swr";

export default function Search() {
  const [query, setQuery] = useState(""); // search input
  const ref = useRef(null); // ref for dropdown
  const [open, setOpen] = useState(false); // dropdown toggle

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  // Fetcher function
  const fetcher = async (input) => {
    if (!input) return [];
    const res = await fetch(
      `https://portal.tradebrains.in/api/assignment/search?keyword=${encodeURIComponent(
        input
      )}&length=8`
    );
    if (!res.ok) return [];
    return res.json();
  };

  // SWR data fetching
  const { data } = useSWR(
    query ? ["search", query] : null,
    () => fetcher(query),
    { revalidateOnFocus: false }
  );

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <input
        className="form-control form-control-dark"
        placeholder="Search by stock symbol or company..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />
      {open && query && data && data.length > 0 && (
        <ul
          className="list-group position-absolute w-100 mt-2"
          style={{ zIndex: 40 }}
        >
          {data.map((s) => (
            <li key={s.symbol} className="list-group-item list-group-item-dark">
              <Link
                href={`/stock/${encodeURIComponent(s.symbol)}`}
                onClick={() => setOpen(false)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700 }}>{s.symbol}</div>
                    <div style={{ color: "var(--muted)", fontSize: 13 }}>
                      {s.name}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
