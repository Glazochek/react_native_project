import { View } from "react-native"

import { card as c } from "../../recipes/card"

type Props = {
  children: React.ReactNode
  style?: any
}

export default function Card({ children, style }: Props) {
  return <View style={[c.shell, style]}>{children}</View>
}
