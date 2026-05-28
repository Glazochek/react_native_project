import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Tabs } from "expo-router"

export default function Layout() {
  return (
    <Tabs
      initialRouteName="markets"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000000", borderTopColor: "#222" },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#FFFFFF",
      }}
    >
      <Tabs.Screen name="markets" options={{ title: "Markets", tabBarIcon: ({ color, size }) => <FontAwesome size={size} name="line-chart" color={color} /> }} />
      <Tabs.Screen name="favorites" options={{ title: "Favorites", tabBarIcon: ({ color, size }) => <FontAwesome size={size} name="star" color={color} /> }} />
      <Tabs.Screen name="blog" options={{ title: "Blog", tabBarIcon: ({ color, size }) => <FontAwesome size={size} name="newspaper-o" color={color} /> }} />
    </Tabs>
  )
}
