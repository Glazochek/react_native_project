import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { useRouter } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { Screen } from "#design/layouts"
import { Text } from "#design/components"
import { getStockList, StockItem } from "#shared/stocks"
import { semantics } from "#design"

import { StockCard } from "./StockCard"

export function MarketsScreen() {
  const nav = useRouter()
  const [list, setList] = useState<StockItem[]>([])
  const [fav, setFav] = useState<string[]>([])

  async function load() {
    const stocks = await getStockList()
    setList(stocks)
    const raw = await AsyncStorage.getItem("fav_stocks")
    setFav(raw ? JSON.parse(raw) : [])
  }

  useEffect(() => {
    load()
  }, [])

  async function toggle(sym: string) {
    const next = fav.includes(sym) ? fav.filter(x => x !== sym) : [...fav, sym]
    setFav(next)
    await AsyncStorage.setItem("fav_stocks", JSON.stringify(next))
  }

  return (
    <Screen>
      <View style={s.topTitle}>
        <Text variant="title">Markets</Text>
      </View>
      <ScrollView contentContainerStyle={s.list}>
        {list.map(it => (
          <StockCard
            key={it.symbol}
            item={it}
            starred={fav.includes(it.symbol)}
            onStar={() => toggle(it.symbol)}
            onOpen={() => nav.push(`/markets/${it.symbol}`)}
          />
        ))}
      </ScrollView>
    </Screen>
  )
}

const s = StyleSheet.create({
  topTitle: {
    paddingTop: 10,
    paddingBottom: 2,
    backgroundColor: semantics.colors.background,
  },
  list: {
    paddingBottom: 20,
  },
})
