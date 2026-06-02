import "@testing-library/jest-native/extend-expect"

jest.mock("expo-router", () => {
  const React = require("react")
  const { Text } = require("react-native")
  return {
    Link: ({ children }: { children: React.ReactNode }) => React.createElement(Text, null, children),
  }
})
