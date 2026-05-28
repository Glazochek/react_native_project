import { createStackNavigator } from '@react-navigation/stack'

import { LogScreen } from '#features/log'
import { useMealsStorage } from '#shared'
import { TabsNavigator } from './TabsNavigator'
import type { RootStackParamList } from './types'

const Stack = createStackNavigator<RootStackParamList>()

export function RootStack() {
  const data = useMealsStorage()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" options={{ headerShown: false }}>
        {() => <TabsNavigator meals={data.meals} />}
      </Stack.Screen>
      <Stack.Screen name="Log" options={{ title: 'Log Meal' }}>
        {() => <LogScreen meals={data.meals} onAdd={data.addMeal} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
