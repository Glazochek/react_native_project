import { View } from 'react-native'

import { screen as s } from '../../recipes/screen'

export function Screen({ style, children, ...props }: any) {
  return (
    <View style={[s.safe, style]} {...props}>
      {children}
    </View>
  )
}
