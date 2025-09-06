import Link from "next/link";
import "./global.css";
import { getTickerData } from "./utils/api";
import TickerBar from "./components/tickerBar";

export const metadata = {
  title: "Stock Search — TradeBrains",
};

export default async function Page() {
  let movers = [];
  try {
    movers = await getTickerData();
  } catch (e) {
    movers = [];
  }

  const gainers = movers?.gainers || [];
  const losers = movers?.losers || [];

  return (
    <div>
      <div
        style={{
          marginBottom: 12,
          fontWeight: 700,
          color: "#fff",
          fontSize: "1.5rem",
        }}
      >
        Trending Stocks Today
      </div>

      <section className="card-dark p-3 mb-4 ">
        <div style={{ marginBottom: 12, fontWeight: 700, color: "#fff" }}>
          Top Gainers
        </div>
        <div className="stock-grid">
          {gainers.map((item) => (
            <Link
              key={item.symbol}
              href={`/stock/${item.symbol}`}
              className="card-dark stock-card"
            >
              <div>
                <div className="stock-symbol">{item.symbol}</div>
                <div className="stock-company">{item.comp_name}</div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: 25,
                      fontWeight: 800,
                      color: "var(--accent)",
                    }}
                  >
                    ₹ {item.close}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: 12 }}>
                    +{item.change.toFixed(3)}%
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <div className="link-muted">View Details</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="card-dark top-losers p-3 mb-4">
        <div style={{ marginBottom: 12, fontWeight: 700, color: "#fff" }}>
          Top Losers
        </div>
        <div className="stock-grid">
          {losers.map((item) => (
            <Link
              key={item.symbol}
              href={`/stock/${item.symbol}`}
              className="card-dark stock-card"
            >
              <div>
                <div className="stock-symbol">{item.symbol}</div>
                <div className="stock-company">{item.comp_name}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: 25,
                    fontWeight: 800,
                    color: "#ff7b7b",
                  }}
                >
                  ₹ {item.close}
                </div>
                <div style={{ color: "var(--muted)", fontSize: 12 }}>
                  {item.change.toFixed(3)}%
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <div className="link-muted">View Details</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
