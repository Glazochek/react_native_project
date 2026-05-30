import { TextInput, type TextInputProps } from 'react-native'

import * as sem from '../../semantics/colors'
import { input as i } from '../../recipes/input'

export function Input(props: TextInputProps) {
  return (
    <TextInput
      style={i.field}
      placeholderTextColor={sem.textMuted}
      keyboardAppearance="dark"
      {...props}
    />
  )
}
