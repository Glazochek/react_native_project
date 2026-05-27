import { Stack } from "expo-router"

import { Text } from "#design/components"
import { Center, Screen } from "#design/layouts"

const App = () => {
  return (
    <>
      <Stack.Screen options={{ title: "About" }} />
      <Screen>
        <Center>
          <Text variant="title">AstroWatch</Text>
          <Text variant="muted">
            Space dashboard: ISS position, DONKI alerts, crew in orbit, NASA APOD.
          </Text>
          <Text href="/">Back to Dashboard</Text>
        </Center>
      </Screen>
    </>
  )
}

export default App
