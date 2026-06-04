import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import { semantics } from "#design";
import { Text } from "#design/components";
import { ScreenScroll, Stack } from "#design/layouts";
import { getQuote } from "#shared/stocks";

export function StockDetailScreen() {
  const p = useLocalSearchParams<{ symbol: string }>();
  const sym = p.symbol || "AAPL";
  const [q, setQ] = useState<{
    c: number;
    o: number;
    h: number;
    l: number;
    pc: number;
  }>();

  useEffect(() => {
    void getQuote(sym).then(setQ);
  }, [sym]);

  return (
    <ScreenScroll
      header={
        <Stack align="center">
          <Text variant="title">{sym}</Text>
        </Stack>
      }
    >
      <Text style={{ color: semantics.colors.accent }}>
        Current: ${q?.c?.toFixed(2) ?? "--"}
      </Text>
      <Text>Open: ${q?.o?.toFixed(2) ?? "--"}</Text>
      <Text>High: ${q?.h?.toFixed(2) ?? "--"}</Text>
      <Text>Low: ${q?.l?.toFixed(2) ?? "--"}</Text>
      <Text>Prev Close: ${q?.pc?.toFixed(2) ?? "--"}</Text>
    </ScreenScroll>
  );
}
