import { useEffect, useState } from "react"

import { Card, Text } from "#design/components"
import { Stack } from "#design/layouts"

import { NASA_KEY } from "./constants"
import type { DonkiNote } from "./types"

export const SolarWeatherCard = () => {
  const [note, setNote] = useState<DonkiNote>()

  useEffect(() => {
    void (async () => {
      const res = await fetch(
        `https://api.nasa.gov/DONKI/notifications?api_key=${NASA_KEY}`,
      )
      const data = await res.json()
      const latest = data[0]
      if (!latest) return
      let body = latest.messageBody
      if (body.length > 100) body = body.slice(0, 100) + "…"
      setNote({
        messageType: latest.messageType,
        messageBody: body,
      })
    })()
  }, [])

  return (
    <Card>
      <Stack align="center">
        <Text variant="title">Space weather</Text>
        <Text variant="label">{note?.messageType ?? "--"}</Text>
        <Text variant="muted">{note?.messageBody ?? "loading…"}</Text>
      </Stack>
    </Card>
  )
}
