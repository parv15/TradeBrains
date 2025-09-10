"use client";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { getTickerData } from "../utils/api";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import Link from "next/link";

export default function TickerBar() {
  const [movers, setMovers] = useState([]);

  useEffect(() => {
    async function fetchTicker() {
      try {
        const data = await getTickerData();
        if (data?.movers || data?.losers) setMovers([...(data.gainers || []), ...(data.losers || [])]);
        else setMovers([]);
      } catch (e) {
        console.error("Error fetching ticker data:", e);
        setMovers([]);
      }
    }
    fetchTicker();
  }, []); 
  

  return (
    <div style={{ background: "#111", color: "white", padding: "6px 0" }}>
      <Marquee gradient={false} speed={50}>
        {movers.map((t, i) => {
          const change = t.change ;
          const isUp = change >= 0;
          return (
            <div
       
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: 40,
                fontSize: 14,
              }}

            >
            <Link key={i} href={`/stock/${encodeURIComponent(t.symbol)}` }>

            <span >
              <span style={{ fontWeight: 700, marginRight: 8 }}>
                {t.symbol}
              </span>
              <span style={{ marginRight: 8 }}>₹{t.close}</span>
              <span
                style={{
                  color: isUp ? "#4ade80" : "#f87171",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {isUp ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
                <span style={{ marginLeft: 4 }}>
                  {isUp ? `+${change.toFixed(2)}` : `${change.toFixed(2)}`}%
                </span>
              </span>
              </span>
            </Link>

            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
