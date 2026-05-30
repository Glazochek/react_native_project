import { FlatList, View } from 'react-native'

import { Text } from '#design/components'
import { Screen } from '#design/layouts'
import { list as s } from '#design/recipes'
import { daysWithCals, niceDate, useAppStuff } from '#shared'

export function HistoryScreen() {
  const { mealList } = useAppStuff()
  const rows = daysWithCals(mealList)

  return (
    <Screen title="History">
      <FlatList
        data={rows}
        keyExtractor={x => x.date}
        contentContainerStyle={s.pad}
        ListEmptyComponent={<Text style={s.empty}>nothing yet</Text>}
        renderItem={({ item }) => (
          <View style={s.row}>
            <Text style={s.rowTitle}>{niceDate(item.date)}</Text>
            <Text style={s.rowAccent}>{item.total} kcal</Text>
          </View>
        )}
      />
    </Screen>
  )
}
