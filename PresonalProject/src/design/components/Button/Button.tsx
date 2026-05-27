import { Pressable, Text } from 'react-native'

import { button as b } from '../../recipes/button'

type Props = {
  title: string
  onPress: () => void
}

export const Button = ({ title, onPress }: Props) => {
  return (
    <Pressable style={b.base} onPress={onPress}>
      <Text style={b.label}>{title}</Text>
    </Pressable>
  )
}
