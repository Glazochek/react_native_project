import { View } from "react-native"

import { card as c } from "../../recipes/card"

type Props = {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return <View style={c.shell}>{children}</View>
}
