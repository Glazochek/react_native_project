import { FlatList, View } from 'react-native'

import { Text } from '#design/components'
import { Row, Screen } from '#design/layouts'
import { list as s } from '#design/recipes'
import { Meal } from '#shared'

type Props = {
  meals: Meal[]
}

export function HistoryScreen({ meals }: Props) {
  const grouped: Record<string, Meal[]> = {}

  for (const m of meals) {
    if (!grouped[m.date]) grouped[m.date] = []
    grouped[m.date].push(m)
  }

  const days = Object.keys(grouped)

  return (
    <Screen>
      <FlatList
        data={days}
        keyExtractor={d => d}
        renderItem={({ item: day }) => (
          <View style={s.section}>
            <Text style={s.date}>{day}</Text>
            {grouped[day].map(m => (
              <Row key={m.id}>
                <Text>{m.name}</Text>
                <Text style={s.rowCal}>{m.cal} kcal</Text>
              </Row>
            ))}
          </View>
        )}
        ListEmptyComponent={<Text style={s.empty}>no meals logged yet</Text>}
      />
    </Screen>
  )
}
