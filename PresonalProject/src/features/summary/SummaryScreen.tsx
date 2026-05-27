import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'

import { Button, Text } from '#design/components'
import { Screen, Stack } from '#design/layouts'
import { Meal } from '#shared'
import type { RootStackParamList } from '../../navigation/types'

import { CalorieSummary } from './CalorieSummary'

type Props = {
  meals: Meal[]
}

export function SummaryScreen({ meals }: Props) {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <Screen>
      <Text variant="title">NomNom 🍔</Text>
      <CalorieSummary meals={meals} />
      <Stack>
        <Button title="log a meal" onPress={() => nav.navigate('Log')} />
      </Stack>
    </Screen>
  )
}
