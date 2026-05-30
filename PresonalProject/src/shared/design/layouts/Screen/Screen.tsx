import { View, type ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text } from '../../components/Text'
import { screen as s } from '../../recipes/screen'

type Props = ViewProps & {
  title: string
  children: React.ReactNode
  centered?: boolean
}

export function Screen({ title, children, centered, style, ...props }: Props) {
  return (
    <SafeAreaView style={s.safe} edges={['top', 'left', 'right']}>
      <View style={s.header}>
        <Text variant="title">{title}</Text>
      </View>
      <View style={[centered ? s.bodyCentered : s.body, style]} {...props}>
        {children}
      </View>
    </SafeAreaView>
  )
}
