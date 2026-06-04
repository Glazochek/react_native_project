import { useState } from 'react'
import { SectionList, View } from 'react-native'

import { Text } from '#design/components'
import { Screen } from '#design/layouts'
import { list as s } from '#design/recipes'
import { mealSections, useAppStuff, type MealSection } from '#shared'

const PAGE = 7

export function HistoryScreen() {
  const { mealList, reloadMeals } = useAppStuff()
  const [dayLimit, setDayLimit] = useState(PAGE)
  const [refreshing, setRefreshing] = useState(false)
  const sections = mealSections(mealList, dayLimit)

  async function onRefresh() {
    setRefreshing(true)
    setDayLimit(PAGE)
    await reloadMeals()
    setRefreshing(false)
  }

  function onEndReached() {
    const all = mealSections(mealList)
    if (dayLimit < all.length) setDayLimit((n) => n + PAGE)
  }

  return (
    <Screen title="History" style={{ flex: 1 }}>
      <SectionList
        sections={sections}
        keyExtractor={(x) => String(x.id)}
        contentContainerStyle={s.pad}
        refreshing={refreshing}
        onRefresh={() => void onRefresh()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={<Text style={s.empty}>nothing yet</Text>}
        renderSectionHeader={({ section }: { section: MealSection }) => (
          <View style={[s.row, { marginBottom: 4 }]}>
            <Text style={s.rowTitle}>{section.title}</Text>
            <Text style={s.rowAccent}>{section.total} kcal</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={[s.row, { marginLeft: 8, marginBottom: 6 }]}>
            <Text style={s.rowTitle}>{item.name}</Text>
            <Text style={s.rowAccent}>{item.cal} kcal</Text>
          </View>
        )}
      />
    </Screen>
  )
}
