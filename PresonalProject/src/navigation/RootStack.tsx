import { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TabsNavigator } from './TabsNavigator'
import { LogScreen } from '#features/log'
import { Meal } from '#shared'
import type { RootStackParamList } from './types'

const Stack = createStackNavigator<RootStackParamList>()

export function RootStack() {
  const [meals, setMeals] = useState<Meal[]>([])

  function addMeal(m: Meal) {
    setMeals(prev => [...prev, m])
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" options={{ headerShown: false }}>
        {() => <TabsNavigator meals={meals} />}
      </Stack.Screen>
      <Stack.Screen name="Log" options={{ title: 'Log Meal' }}>
        {() => <LogScreen meals={meals} onAdd={addMeal} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
