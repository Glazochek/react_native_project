export const KEY = "d8c0oehr01qkc5gdqcs0d8c0oehr01qkc5gdqcsg"

export const SYMBOLS = ["AAPL", "TSLA", "GOOGL", "MSFT", "AMZN", "NVDA", "META", "NFLX", "AMD", "INTC", "BABA", "ORCL"]

export type StockItem = {
  symbol: string
  name: string
  c: number
  o: number
  h: number
  l: number
  pc: number
  dp: number
}

export type NewsItem = {
  id: number
  headline: string
  source: string
  datetime: number
  url: string
}

export async function getQuote(symbol: string) {
  const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${KEY}`)
  return res.json() as Promise<{ c:number;o:number;h:number;l:number;pc:number;dp:number }>
}

export async function getProfile(symbol: string) {
  const res = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${KEY}`)
  return res.json() as Promise<{ name?: string }>
}

export async function getMarketNews() {
  const res = await fetch(`https://finnhub.io/api/v1/news?category=general&token=${KEY}`)
  return res.json() as Promise<NewsItem[]>
}

export async function getStockList(list = SYMBOLS) {
  const out: StockItem[] = []
  for (const symbol of list) {
    const q = await getQuote(symbol)
    const p = await getProfile(symbol)
    out.push({ symbol, name: p.name ?? symbol, ...q })
  }
  return out
}
