import { View, Text, FlatList, StyleSheet } from 'react-native'
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
    <View style={s.container}>
      <FlatList
        data={days}
        keyExtractor={d => d}
        renderItem={({ item: day }) => (
          <View style={s.section}>
            <Text style={s.date}>{day}</Text>
            {grouped[day].map(m => (
              <View key={m.id} style={s.row}>
                <Text>{m.name}</Text>
                <Text style={s.cal}>{m.cal} kcal</Text>
              </View>
            ))}
          </View>
        )}
        ListEmptyComponent={<Text style={s.empty}>no meals logged yet</Text>}
      />
    </View>
  )
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  section: { padding: 16, borderBottomWidth: 1, borderColor: '#eee' },
  date: { fontWeight: 'bold', marginBottom: 8, color: '#555' },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  cal: { color: '#888' },
  empty: { padding: 24, color: '#aaa', textAlign: 'center' },
})