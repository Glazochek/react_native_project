import { Pressable, StyleSheet, View } from "react-native"
import { Card, Text } from "#design/components"
import { semantics } from "#design"
import { StockItem } from "#shared/stocks"

type P = {
  item: StockItem
  onOpen: () => void
  onStar?: () => void
  starred?: boolean
}

export function StockCard({ item, onOpen, onStar, starred }: P) {
  const up = item.dp >= 0

  return (
    <Card style={s.cardMini}>
      <View style={s.row}>
        <View style={s.left}>
          <Pressable onPress={onOpen}>
            <Text style={s.name}>{item.symbol}</Text>
          </Pressable>
          <Text variant="muted">{item.name}</Text>
        </View>

        <View style={s.mid}>
          <Text>${item.c.toFixed(2)}</Text>
          <Text style={{ color: up ? semantics.colors.accent : semantics.colors.accentWarm }}>
            {up ? "+" : ""}
            {item.dp.toFixed(2)}%
          </Text>
        </View>

        <View style={s.right}>
          {onStar ? (
            <Pressable onPress={onStar} style={s.starBtn}>
              <Text style={s.starTxt}>{starred ? "✓" : "+"}</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </Card>
  )
}

const s = StyleSheet.create({
  cardMini: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 5,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: { flex: 1 },
  mid: { alignItems: "center", minWidth: 90 },
  right: { width: 58, alignItems: "flex-end" },
  name: { fontSize: 18, color: semantics.colors.text },
  starBtn: {
    width: 44,
    height: 34,
    borderWidth: 1,
    borderColor: semantics.colors.accent,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  starTxt: { fontSize: 22, color: semantics.colors.accent },
})
