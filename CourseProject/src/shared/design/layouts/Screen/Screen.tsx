import { SafeAreaView } from "react-native-safe-area-context"

import { screen as s } from "../../recipes/screen"

function Screen({ style, children, ...props }: any) {
  return (
    <SafeAreaView style={[s.safe, style]} {...props}>
      {children}
    </SafeAreaView>
  )
}

export default Screen
