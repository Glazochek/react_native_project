import { View } from "react-native"

import { screen as s } from "../../recipes/screen"

const Center = ({ style, children, ...props }: any) => (
  <View style={[s.centered, style]} {...props}>
    {children}
  </View>
)

export default Center
