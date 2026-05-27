import { Text as RNText } from 'react-native'

import { text as s } from '../../recipes/text'

type Props = {
  variant?: keyof typeof s
  children: React.ReactNode
  style?: any
}

export function Text({ variant = 'body', style, children, ...props }: Props) {
  return (
    <RNText style={[s[variant], style]} {...props}>
      {children}
    </RNText>
  )
}
