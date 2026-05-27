import { View } from 'react-native'

import { card as c } from '../../recipes/card'

export function Card({ style, children, ...props }: any) {
  return (
    <View style={[c.summary, style]} {...props}>
      {children}
    </View>
  )
}
