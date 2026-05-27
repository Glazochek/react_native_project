import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SummaryScreen } from '#features/summary'
import { HistoryScreen } from '#features/history'
import { Meal } from '#shared'

const Tab = createBottomTabNavigator()

type Props = {
  meals: Meal[]
}

export function TabsNavigator({ meals }: Props) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Summary">
        {() => <SummaryScreen meals={meals} />}
      </Tab.Screen>
      <Tab.Screen name="History">
        {() => <HistoryScreen meals={meals} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
