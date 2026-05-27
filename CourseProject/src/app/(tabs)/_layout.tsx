import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Tabs } from "expo-router"

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="rocket" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="crew"
        options={{
          title: "Crew",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="apod"
        options={{
          title: "APOD",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="picture-o" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default Layout
