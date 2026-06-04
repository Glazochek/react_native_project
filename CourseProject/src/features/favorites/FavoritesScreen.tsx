import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ScreenScroll, Stack } from "#design/layouts";
import { Text } from "#design/components";
import { getStockList, StockItem } from "#shared/stocks";
import { StockCard } from "#features/markets";

export function FavoritesScreen() {
  const nav = useRouter();
  const [list, setList] = useState<StockItem[]>([]);

  async function load() {
    const raw = await AsyncStorage.getItem("fav_stocks");
    const ids = raw ? (JSON.parse(raw) as string[]) : [];
    if (ids.length === 0) {
      setList([]);
      return;
    }
    const v = await getStockList(ids);
    setList(v);
  }

  useEffect(() => {
    load();
    const t = setInterval(() => {
      load();
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <ScreenScroll
      header={
        <Stack align="center">
          <Text variant="title">Favorites</Text>
        </Stack>
      }
    >
      {list.length === 0 ? <Text variant="muted">No favorites yet</Text> : null}
      {list.map((it) => (
        <StockCard
          key={it.symbol}
          item={it}
          onOpen={() => nav.push(`/markets/${it.symbol}`)}
        />
      ))}
    </ScreenScroll>
  );
}
