import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { SwipeRow, Text } from "#design/components";
import { ScreenScroll, Stack } from "#design/layouts";
import { StockCard } from "#features/markets";
import { getStockList, type StockItem } from "#shared/stocks";

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

  async function remove(sym: string) {
    const raw = await AsyncStorage.getItem("fav_stocks");
    const ids = raw ? (JSON.parse(raw) as string[]) : [];
    const next = ids.filter((x) => x !== sym);
    await AsyncStorage.setItem("fav_stocks", JSON.stringify(next));
    setList((old) => old.filter((it) => it.symbol !== sym));
  }

  useEffect(() => {
    void load();
    const t = setInterval(() => {
      void load();
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
        <SwipeRow
          key={it.symbol}
          actionLabel="Remove"
          onAction={() => void remove(it.symbol)}
        >
          <StockCard
            item={it}
            onOpen={() => nav.push(`/markets/${it.symbol}`)}
          />
        </SwipeRow>
      ))}
    </ScreenScroll>
  );
}
