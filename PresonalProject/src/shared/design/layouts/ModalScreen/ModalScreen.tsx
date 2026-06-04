import { Pressable, View, type ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text } from '../../components/Text'
import { screen as s } from '../../recipes/screen'

type Props = ViewProps & {
  title: string
  onClose: () => void
  children: React.ReactNode
}

export function ModalScreen({
  title,
  onClose,
  children,
  style,
  ...props
}: Props) {
  return (
    <SafeAreaView style={s.safe} edges={['top', 'left', 'right', 'bottom']}>
      <View style={s.modalHeader}>
        <Text variant="title">{title}</Text>
        <Pressable onPress={onClose} hitSlop={12}>
          <Text variant="link">close</Text>
        </Pressable>
      </View>
      <View style={[s.formCenter, style]} {...props}>
        {children}
      </View>
    </SafeAreaView>
  )
}
