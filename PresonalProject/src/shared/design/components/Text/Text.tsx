import { Text as RNText, type TextProps } from 'react-native'

import { text as s } from '../../recipes/text'

type Variant = keyof typeof s

type Props = TextProps & {
  variant?: Variant
}

export function Text({ variant = 'body', style, ...props }: Props) {
  return <RNText style={[s[variant], style]} {...props} />
}
