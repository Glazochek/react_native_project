import { useEffect, useState } from "react"

import { Card, Text } from "#design/components"
import { Stack } from "#design/layouts"

import type { IssPosition } from "./types"

export function IssPositionCard() {
  const [pos, setPos] = useState<IssPosition>()

  useEffect(() => {
    async function go() {
      const res = await fetch("http://api.open-notify.org/iss-now.json")
      const data = await res.json()
      setPos({
        latitude: data.iss_position.latitude,
        longitude: data.iss_position.longitude,
      })
    }
    go()
  }, [])

  return (
    <Card>
      <Stack align="center">
        <Text variant="title">ISS position</Text>
        <Text variant="muted">lat {pos?.latitude ?? "--"}</Text>
        <Text variant="muted">lng {pos?.longitude ?? "--"}</Text>
      </Stack>
    </Card>
  )
}
