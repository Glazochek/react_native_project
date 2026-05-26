import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import type { RootStackParamList } from '../../navigation/types'
import { CalorieSummary } from './CalorieSummary'
import { Meal } from '#shared'

type Props = {
  meals: Meal[]
}

export function SummaryScreen({ meals }: Props) {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <View style={s.container}>
      <Text style={s.title}>NomNom 🍔</Text>
      <CalorieSummary meals={meals} />
      <Button title="log a meal" onPress={() => nav.navigate('Log')} />
    </View>
  )
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', padding: 16 },
})