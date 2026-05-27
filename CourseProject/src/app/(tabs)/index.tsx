import { Text } from "#design/components"
import { ScreenScroll, Stack } from "#design/layouts"
import { screen as s } from "#design/recipes"
import { IssPositionCard, SolarWeatherCard } from "#shared/space"

export default function App() {
  return (
    <ScreenScroll
      header={
        <Stack align="center" style={s.section}>
          <Text variant="title">AstroWatch</Text>
        </Stack>
      }
    >
      <IssPositionCard />
      <SolarWeatherCard />
    </ScreenScroll>
  )
}
