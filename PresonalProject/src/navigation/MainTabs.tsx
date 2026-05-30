import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { tab, tabColors } from '#design/recipes'
import { HistoryScreen } from '#features/history'
import { SettingsScreen } from '#features/settings'
import { SummaryScreen } from '#features/summary'

const Tab = createBottomTabNavigator()

export function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Summary"
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarStyle: tab.bar,
        tabBarActiveTintColor: tabColors.active,
        tabBarInactiveTintColor: tabColors.inactive,
      }}
    >
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Summary"
        component={SummaryScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="pie-chart" size={focused ? 34 : 28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
