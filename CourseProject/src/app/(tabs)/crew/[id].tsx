import { Stack, useLocalSearchParams } from "expo-router"

import { Text } from "#design/components"
import { Center, Screen } from "#design/layouts"

export default function App() {
  const params = useLocalSearchParams<{ id: string; craft?: string }>()
  let name = "--"
  if (params.id) name = decodeURIComponent(params.id)

  return (
    <>
      <Stack.Screen options={{ title: name }} />
      <Screen>
        <Center>
          <Text variant="title">{name}</Text>
          <Text variant="label">craft</Text>
          <Text variant="large">{params.craft ?? "--"}</Text>
        </Center>
      </Screen>
    </>
  )
}
