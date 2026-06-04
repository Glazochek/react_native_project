import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View, Linking } from "react-native";

import { Card, Text } from "#design/components";
import { ScreenScroll, Stack } from "#design/layouts";
import { getMarketNews, type NewsItem } from "#shared/stocks";

export function BlogScreen() {
  const [items, setItems] = useState<NewsItem[]>([]);

  async function load() {
    const v = await getMarketNews();
    setItems(v.slice(0, 30));
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <ScreenScroll
      header={
        <Stack align="center">
          <Text variant="title">Blog</Text>
        </Stack>
      }
    >
      {items.map((n) => (
        <Pressable key={n.id} onPress={() => Linking.openURL(n.url)}>
          <Card>
            <Text>{n.headline}</Text>
            <View style={s.row}>
              <Text variant="muted">{n.source}</Text>
              <Text variant="muted">
                {new Date(n.datetime * 1000).toLocaleDateString()}
              </Text>
            </View>
          </Card>
        </Pressable>
      ))}
    </ScreenScroll>
  );
}

const s = StyleSheet.create({
  row: { width: "100%", flexDirection: "row", justifyContent: "space-between" },
});
