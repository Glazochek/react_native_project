import { Stack as NavStack } from "expo-router"

import { Text } from "#design/components"
import { Screen, Stack } from "#design/layouts"
import { screen as s } from "#design/recipes"
import { CrewScroll } from "#shared/space"

export default function App() {
  return (
    <>
      <NavStack.Screen options={{ title: "Crew" }} />
      <Screen>
        <Stack style={s.section}>
          <Text variant="title">In space now</Text>
          <Stack align="center" style={s.hint}>
            <Text variant="muted">tap a name for details</Text>
          </Stack>
          <CrewScroll />
        </Stack>
      </Screen>
    </>
  )
}
