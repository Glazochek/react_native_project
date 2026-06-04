import 'react-native-gesture-handler'
import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { MainTabs } from './src/navigation'
import { AppProvider } from '#shared'

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    card: '#000000',
    border: '#3a3a3c',
    text: '#ffffff',
    primary: '#b8ff3c',
  },
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <NavigationContainer theme={navTheme}>
          <StatusBar style="light" />
          <MainTabs />
        </NavigationContainer>
      </AppProvider>
    </GestureHandlerRootView>
  )
}
