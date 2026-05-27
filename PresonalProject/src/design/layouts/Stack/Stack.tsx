import { View } from 'react-native'

import { input as i } from '../../recipes/input'

const Stack = ({ style, children, ...props }: any) => (
  <View style={[i.group, style]} {...props}>
    {children}
  </View>
)

export { Stack }
