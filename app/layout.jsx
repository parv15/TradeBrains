import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import Sidebar from "./components/sideBar";
import Image from "next/image";
import TickerBar from "./components/tickerBar";

export const metadata = {
  title: "TradeBrains — Stocks",
  description: "Stock ticker dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TickerBar />
        <div className="app-shell">
          <aside className="sidebar">
            <div className="brand">
              <Image
                src="/logo.png"
                alt="TradeBrains Logo"
                width={40}
                height={40}
                className="logo"
              />
              <div>
                <div style={{ fontWeight: 800 }}>TradeBrains</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>
                  Dashboard
                </div>
              </div>
            </div>
            <Sidebar />
          </aside>

          <main className="main">
            <NavBar />
            {children}
          </main>
          <div className="bottom-nav">
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
