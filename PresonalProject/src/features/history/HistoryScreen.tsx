import { FlatList, View } from 'react-native'

import { Text } from '#design/components'
import { Row, Screen } from '#design/layouts'
import { list as s } from '#design/recipes'
import { Meal } from '#shared'

type Props = {
  meals: Meal[]
}

export function HistoryScreen({ meals }: Props) {
  const grouped: any = {}

  for (let i = 0; i < meals.length; i++) {
    const m = meals[i]
    if (!grouped[m.date]) grouped[m.date] = []
    grouped[m.date].push(m)
  }

  const days = Object.keys(grouped)

  return (
    <Screen>
      <FlatList
        data={days}
        keyExtractor={d => d}
        renderItem={({ item }) => (
          <View style={s.section}>
            <Text style={s.date}>{item}</Text>
            {grouped[item].map((m: Meal) => (
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
