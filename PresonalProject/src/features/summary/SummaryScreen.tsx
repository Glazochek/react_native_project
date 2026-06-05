import { useState } from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { Button, CalorieRing, SwipeRow, Text } from '#design/components'
import { Screen } from '#design/layouts'
import { list as s } from '#design/recipes'
import { useAdjustedGoal } from '#features/market-boost'
import { LogMealScreen } from '#features/log'
import { getDailyCals, todayCals, todayMeals, useAppStuff } from '#shared'

export function SummaryScreen() {
  const { mealList, prof, reloadTodayMeals, removeMeal } = useAppStuff()
  const [showLog, setShowLog] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const eaten = todayCals(mealList)
  const norm = getDailyCals(prof)
  const { status, goal, error, reload } = useAdjustedGoal(norm)
  const rows = todayMeals(mealList)

  async function onRefresh() {
    setRefreshing(true)
    await reloadTodayMeals()
    reload()
    setRefreshing(false)
  }

  return (
    <>
      <Screen title="Summary" style={{ flex: 1 }}>
        <FlatList
          data={rows}
          keyExtractor={(x) => String(x.id)}
          contentContainerStyle={s.pad}
          refreshing={refreshing}
          onRefresh={() => void onRefresh()}
          ListHeaderComponent={
            <View style={{ alignItems: 'center', marginBottom: 16 }}>
              {status === 'loading' ? (
                <>
                  <ActivityIndicator size="large" color="#b8ff3c" />
                  <Text variant="muted" style={{ marginTop: 12 }}>
                    loading market data...
                  </Text>
                </>
              ) : null}
              {status === 'error' ? (
                <Text variant="muted" style={{ textAlign: 'center' }}>
                  {error ?? 'could not load market data'}
                </Text>
              ) : null}
              {status === 'ready' && goal !== null ? (
                <>
                  <CalorieRing eaten={eaten} max={goal} />
                  {goal > norm ? (
                    <Text variant="muted" style={{ marginTop: 8 }}>
                      +20% market boost (AAPL, MSFT, NVDA all down)
                    </Text>
                  ) : null}
                </>
              ) : null}
              <Button
                title="log meal"
                variant="primary"
                onPress={() => setShowLog(true)}
              />
              <Text variant="label" style={{ marginTop: 16 }}>
                today
              </Text>
            </View>
          }
          ListEmptyComponent={<Text style={s.empty}>no meals today</Text>}
          renderItem={({ item }) => (
            <SwipeRow
              actionLabel="Delete"
              onAction={() => removeMeal(item.id)}
              style={{ marginBottom: 10, borderRadius: 12 }}
            >
              <View style={s.row}>
                <Text style={s.rowTitle}>{item.name}</Text>
                <Text style={s.rowAccent}>{item.cal} kcal</Text>
              </View>
            </SwipeRow>
          )}
        />
      </Screen>

      <Modal
        visible={showLog}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <LogMealScreen onDone={() => setShowLog(false)} />
      </Modal>
    </>
  )
}
