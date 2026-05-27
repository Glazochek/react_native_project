import { useEffect, useState } from "react"
import { ScrollView, View } from "react-native"

import { Card, Text } from "#design/components"
import { card as c } from "#design/recipes"

import type { PersonInSpace } from "./types"

export function CrewScroll() {
  const [people, setPeople] = useState<PersonInSpace[]>([])

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => setPeople(data.people))
  }, [])

  return (
    <Card>
      <ScrollView horizontal style={c.crewRow}>
        {people.map(p => (
          <View key={p.name} style={c.crewItem}>
            <Text
              href={`/crew/${encodeURIComponent(p.name)}?craft=${encodeURIComponent(p.craft)}`}
              variant="large"
            >
              {p.name}
            </Text>
            <Text variant="label">{p.craft}</Text>
          </View>
        ))}
      </ScrollView>
    </Card>
  )
}
