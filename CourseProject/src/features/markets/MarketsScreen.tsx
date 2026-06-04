import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet, Switch, TextInput, View } from "react-native";

import { semantics } from "#design";
import { Text } from "#design/components";
import { Screen } from "#design/layouts";
import {
  getStockList,
  nextSymbols,
  STOCK_POOL,
  type StockItem,
} from "#shared/stocks";

import { StockCard } from "./StockCard";

export function MarketsScreen() {
  const nav = useRouter();
  const [list, setList] = useState<StockItem[]>([]);
  const [loadedSyms, setLoadedSyms] = useState<string[]>([]);
  const [fav, setFav] = useState<string[]>([]);
  const [growingOnly, setGrowingOnly] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadPrices = useCallback(async (syms: string[]) => {
    if (syms.length === 0) {
      setList([]);
      return;
    }
    const stocks = await getStockList(syms);
    setList(stocks);
    setLoadedSyms(syms);
  }, []);

  useEffect(() => {
    void (async () => {
      await loadPrices(START_SYMS);
      const raw = await AsyncStorage.getItem("fav_stocks");
      setFav(raw ? (JSON.parse(raw) as string[]) : []);
    })();
  }, [loadPrices]);

  async function onRefresh() {
    setRefreshing(true);
    await loadPrices(loadedSyms.length ? loadedSyms : START_SYMS);
    setRefreshing(false);
  }

  async function onEndReached() {
    if (loadingMore) return;
    const batch = nextSymbols(loadedSyms, 4);
    if (batch.length === 0) return;
    setLoadingMore(true);
    const added = await getStockList(batch);
    const syms = [...loadedSyms, ...batch];
    setLoadedSyms(syms);
    setList((old) => {
      const keys = new Set(old.map((x) => x.symbol));
      const merged = [...old];
      for (const row of added) {
        if (!keys.has(row.symbol)) merged.push(row);
      }
      return merged;
    });
    setLoadingMore(false);
  }

  async function toggle(sym: string) {
    const next = fav.includes(sym)
      ? fav.filter((x) => x !== sym)
      : [...fav, sym];
    setFav(next);
    await AsyncStorage.setItem("fav_stocks", JSON.stringify(next));
  }

  const shown = useMemo(() => {
    const q = searchTxt.trim().toLowerCase();
    return list.filter((it) => {
      if (growingOnly && it.dp <= 0) return false;
      if (!q) return true;
      return (
        it.symbol.toLowerCase().includes(q) || it.name.toLowerCase().includes(q)
      );
    });
  }, [list, growingOnly, searchTxt]);

  const header = (
    <View style={s.header}>
      <View style={s.titleRow}>
        <Text style={s.title}>Market</Text>
        <View style={s.switchWrap}>
          <Text style={s.switchLbl}>{growingOnly ? "growing" : "all"}</Text>
          <Switch
            value={growingOnly}
            onValueChange={setGrowingOnly}
            trackColor={{
              false: semantics.colors.border,
              true: semantics.colors.accent,
            }}
            thumbColor={semantics.colors.text}
          />
        </View>
      </View>
      <TextInput
        style={s.search}
        placeholder="search stocks..."
        placeholderTextColor={semantics.colors.textMuted}
        value={searchTxt}
        onChangeText={setSearchTxt}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );

  return (
    <Screen style={s.screen}>
      <FlatList
        data={shown}
        keyExtractor={(it) => it.symbol}
        contentContainerStyle={s.list}
        ListHeaderComponent={header}
        refreshing={refreshing}
        onRefresh={() => void onRefresh()}
        onEndReached={() => void onEndReached()}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={<Text variant="muted">No stocks found</Text>}
        renderItem={({ item: it }) => (
          <StockCard
            item={it}
            starred={fav.includes(it.symbol)}
            onStar={() => toggle(it.symbol)}
            onOpen={() => nav.push(`/markets/${it.symbol}`)}
          />
        )}
      />
    </Screen>
  );
}

const START_SYMS = STOCK_POOL.slice(0, 12);

const s = StyleSheet.create({
  screen: {
    backgroundColor: semantics.colors.background,
  },
  header: {
    backgroundColor: semantics.colors.background,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: semantics.colors.border,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: semantics.colors.text,
  },
  switchWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  switchLbl: {
    color: semantics.colors.text,
    fontSize: 14,
  },
  search: {
    backgroundColor: semantics.colors.surface,
    color: semantics.colors.text,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
  },
  list: {
    paddingBottom: 20,
  },
});
