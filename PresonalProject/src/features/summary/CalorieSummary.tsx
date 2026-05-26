import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Meal, DAILY_GOAL } from '#shared'

type Props = {
  meals: Meal[]
}

export function CalorieSummary({ meals }: Props) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const today = new Date().toDateString()
    const sum = meals
      .filter(m => m.date === today)
      .reduce((acc, m) => acc + m.cal, 0)
    setTotal(sum)
  }, [meals])

  return (
    <View style={s.box}>
      <Text style={s.total}>{total} kcal</Text>
      <Text style={s.goal}>goal: {DAILY_GOAL} kcal</Text>
    </View>
  )
}

const s = StyleSheet.create({
  box: { padding: 16, margin: 16, backgroundColor: '#f5f5f5', borderRadius: 8 },
  total: { fontSize: 32, fontWeight: 'bold' },
  goal: { marginTop: 4, color: '#666' },
})
