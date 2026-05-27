import { FlatList } from 'react-native'

import { Text } from '#design/components'
import { Row } from '#design/layouts'
import { list as s } from '#design/recipes'
import { Meal } from '#shared'

type Props = {
  meals: Meal[]
}

export function MealList({ meals }: Props) {
  const today = new Date().toDateString()
  const todayMeals = meals.filter(m => m.date === today)

  return (
    <FlatList
      data={todayMeals}
      keyExtractor={m => String(m.id)}
      contentContainerStyle={s.content}
      renderItem={({ item }) => (
        <Row>
          <Text>{item.name}</Text>
          <Text style={s.rowCal}>{item.cal} kcal</Text>
        </Row>
      )}
      ListEmptyComponent={<Text style={s.empty}>no meals today</Text>}
    />
  )
}
