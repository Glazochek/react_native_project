import { useEffect, useState } from "react"
import { ActivityIndicator, Image } from "react-native"

import { Text } from "#design/components"
import { Screen, ScreenScroll, Stack } from "#design/layouts"
import { media as m } from "#design/recipes"
import { NASA_KEY, type ApodData } from "#shared/space"

export default function App() {
  const [data, setData] = useState<ApodData>()

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`,
      )
      const json = await res.json()
      setData(json as ApodData)
    }
    load()
  }, [])

  if (!data) {
    return (
      <Screen>
        <ActivityIndicator size="large" />
      </Screen>
    )
  }

  return (
    <ScreenScroll contentContainerStyle={m.apodContent}>
      <Text variant="title">{data.title}</Text>
      <Image source={{ uri: data.url }} style={m.apodImage} resizeMode="cover" />
      <Stack style={m.apodBody}>
        <Text variant="muted">{data.explanation}</Text>
      </Stack>
    </ScreenScroll>
  )
}
