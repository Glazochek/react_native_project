import { Pressable, Text } from 'react-native'

import { button as b } from '../../recipes/button'

type Props = {
  title: string
  onPress: () => void
  variant?: 'default' | 'primary'
}

export function Button({ title, onPress, variant = 'default' }: Props) {
  const isPrimary = variant === 'primary'
  return (
    <Pressable
      style={[b.base, isPrimary ? b.primary : b.default]}
      onPress={onPress}
    >
      <Text style={isPrimary ? b.labelPrimary : b.label}>{title}</Text>
    </Pressable>
  )
}
