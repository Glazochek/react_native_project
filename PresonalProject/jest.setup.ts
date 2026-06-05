import '@testing-library/jest-native/extend-expect'

jest.mock('react-native-gesture-handler', () => {
  const React = require('react')
  const { View } = require('react-native')
  const pan = () => {
    const g = {
      activeOffsetX: () => g,
      onBegin: () => g,
      onUpdate: () => g,
      onEnd: () => g,
    }
    return g
  }
  return {
    GestureHandlerRootView: View,
    GestureDetector: ({ children }: { children: React.ReactNode }) =>
      React.createElement(View, null, children),
    Gesture: { Pan: pan },
    RectButton: View,
    Swipeable: View,
    State: {},
    PanGestureHandler: View,
    FlatList: View,
  }
})
