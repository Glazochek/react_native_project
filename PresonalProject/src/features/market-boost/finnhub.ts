export const TOP_SYMBOLS = ['AAPL', 'MSFT', 'NVDA'] as const

type QuoteRaw = {
  dp?: number
}

function getToken() {
  const token = process.env.EXPO_PUBLIC_FINNHUB_TOKEN
  if (!token) throw new Error('missing EXPO_PUBLIC_FINNHUB_TOKEN')
  return token
}

export async function fetchTopStockDps() {
  const token = getToken()
  const out: number[] = []

  for (const symbol of TOP_SYMBOLS) {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`,
    )
    if (!res.ok) throw new Error(`quote failed for ${symbol}`)
    const raw = (await res.json()) as QuoteRaw
    const dp = Number(raw.dp)
    if (!Number.isFinite(dp)) throw new Error(`bad quote for ${symbol}`)
    out.push(dp)
  }

  return out
}
