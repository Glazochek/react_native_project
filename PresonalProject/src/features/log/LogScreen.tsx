import { View, StyleSheet } from 'react-native'
import { MealInput } from './MealInput'
import { MealList } from './MealList'
import { Meal } from '#shared'

type Props = {
  meals: Meal[]
  onAdd: (m: Meal) => void
}

export function LogScreen({ meals, onAdd }: Props) {
  return (
    <View style={s.container}>
      <MealInput onAdd={onAdd} />
      <MealList meals={meals} />
    </View>
  )
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
})