import { FlatList, Text, View, StyleSheet } from 'react-native'
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
      renderItem={({ item }) => (
        <View style={s.row}>
          <Text>{item.name}</Text>
          <Text style={s.cal}>{item.cal} kcal</Text>
        </View>
      )}
      ListEmptyComponent={<Text style={s.empty}>no meals today</Text>}
      contentContainerStyle={s.list}
    />
  )
}

const s = StyleSheet.create({
  list: { padding: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  cal: { color: '#888' },
  empty: { color: '#aaa', textAlign: 'center', padding: 16 },
})
