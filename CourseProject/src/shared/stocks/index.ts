export const KEY = "d8c0oehr01qkc5gdqcs0d8c0oehr01qkc5gdqcsg";

export const SYMBOLS = [
  "AAPL",
  "TSLA",
  "GOOGL",
  "MSFT",
  "AMZN",
  "NVDA",
  "META",
  "NFLX",
  "AMD",
  "INTC",
  "BABA",
  "ORCL",
];

export type StockItem = {
  symbol: string;
  name: string;
  c: number;
  o: number;
  h: number;
  l: number;
  pc: number;
  dp: number;
};

export type NewsItem = {
  id: number;
  headline: string;
  source: string;
  datetime: number;
  url: string;
};

type QuoteRaw = {
  c?: number;
  o?: number;
  h?: number;
  l?: number;
  pc?: number;
  dp?: number;
};

export async function getQuote(symbol: string) {
  const res = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${KEY}`,
  );
  const raw = (await res.json()) as QuoteRaw;
  return {
    c: Number(raw.c) || 0,
    o: Number(raw.o) || 0,
    h: Number(raw.h) || 0,
    l: Number(raw.l) || 0,
    pc: Number(raw.pc) || 0,
    dp: Number(raw.dp) || 0,
  };
}

export async function getProfile(symbol: string) {
  const res = await fetch(
    `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${KEY}`,
  );
  return res.json() as Promise<{ name?: string }>;
}

export async function getMarketNews() {
  const res = await fetch(
    `https://finnhub.io/api/v1/news?category=general&token=${KEY}`,
  );
  return res.json() as Promise<NewsItem[]>;
}

export async function getStockList(list = SYMBOLS) {
  const out: StockItem[] = [];
  for (const symbol of list) {
    const q = await getQuote(symbol);
    const p = await getProfile(symbol);
    out.push({ symbol, name: p.name ?? symbol, ...q });
  }
  return out;
}
