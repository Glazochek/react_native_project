import { ScrollView } from "react-native"

import Screen from "../Screen/Screen"
import { screen as s } from "../../recipes/screen"

function ScreenScroll({ header, children, contentContainerStyle, ...props }: any) {
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={[s.scrollContent, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {header}
        {children}
      </ScrollView>
    </Screen>
  )
}

export default ScreenScroll
