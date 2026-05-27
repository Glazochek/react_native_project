import { View } from 'react-native'

import { list as s } from '../../recipes/list'

export function Row({ style, children, ...props }: any) {
  return (
    <View style={[s.row, style]} {...props}>
      {children}
    </View>
  )
}
