import { TextInput } from 'react-native'

import { input as i } from '../../recipes/input'

export function Input(props: any) {
  return <TextInput style={i.field} placeholderTextColor="#888" {...props} />
}
