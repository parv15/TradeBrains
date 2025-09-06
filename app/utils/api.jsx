export const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'https://portal.tradebrains.in'

export async function getTickerData(){
  const res = await fetch(`${API_HOST}/api/assignment/index/NIFTY/movers/`, {cache:'no-store'})
  if(!res.ok) throw new Error('Ticker API failed')
  return res.json()
}

export async function getStockPrices(symbol, days=1, type='INTRADAY', limit=200){
  const res = await fetch(`${API_HOST}/api/assignment/stock/${symbol}/prices?days=${days}&type=${type}&limit=${limit}`, {cache:'no-store'})
  if(!res.ok) throw new Error('Prices API failed')
  return res.json()
}

export async function searchStocks(keyword,length=10){
  const res = await fetch(`${API_HOST}/api/assignment/search?keyword=${encodeURIComponent(keyword)}&length=${length}`, {cache:'no-cache'})
  if(!res.ok) throw new Error('Search API failed')
  return res.json()
}