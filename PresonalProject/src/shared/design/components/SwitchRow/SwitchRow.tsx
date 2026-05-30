import { Switch, View } from 'react-native'

import { row as r } from '../../recipes/row'
import { switchColors } from '../../recipes/switch'
import { Text } from '../Text'

type Props = {
  label: string
  value: boolean
  onValueChange: (v: boolean) => void
}

export function SwitchRow({ label, value, onValueChange }: Props) {
  return (
    <View style={r.switch}>
      <Text>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={switchColors.track}
        thumbColor={switchColors.thumb(value)}
        ios_backgroundColor={switchColors.iosBg}
      />
    </View>
  )
}
