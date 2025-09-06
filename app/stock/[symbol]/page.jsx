import { getStockPrices } from '../../utils/api'
import '../../global.css'
import StockWrapper from '../../components/stockCharts'
import FavoriteButton from '../../components/favoriteBtn';

export async function generateMetadata({ params }) {
    const symbol = await decodeURIComponent(params?.symbol) 
  return {
    title: `${symbol} — Stock Details`,
    description: `Price and overview for ${symbol}`,
  }
}

export default async function stockPrice({params}) {
  const { symbol } = params
  let prices = []
  try{
    const raw = await getStockPrices(symbol, 1, 'INTRADAY', 500)
    prices = raw.reverse()
  }catch(e){
    prices = []
  }
  const latest = prices.length ? prices[prices.length-1] : null
  const latestPrice = latest?.close || '—'
  const change = latest ? (latest?.close - (prices[prices?.length-2]?.close )) : 0
  const labels = prices.map(p => new Date(p.date)?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) )
  const values = prices.map(p => p?.close)

  return (
    <div>
      <div className="detail-hero card-dark">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <div style={{fontSize:28,fontWeight:800}}>{decodeURIComponent(symbol)}</div>
          </div>
          <div style={{textAlign:'right'}}>
            <FavoriteButton symbol={decodeURIComponent(symbol)} />
            <div style={{fontSize:36,fontWeight:800,color: change < 0 ? '#ff7b7b' : 'var(--accent)'}}>₹ {latestPrice}</div>
            <div style={{color:'var(--muted)',fontSize:14}}>{change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2)} %</div>
          </div>
        </div>
      </div>
      <div className="card-dark chart-card">
        <StockWrapper labels={labels} values={values} />
      </div>
    </div>
  )
}