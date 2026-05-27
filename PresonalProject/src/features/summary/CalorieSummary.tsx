import { useEffect, useState } from 'react'

import { Card, Text } from '#design/components'
import { card as c } from '#design/recipes'
import { DAILY_GOAL, Meal } from '#shared'

type Props = {
  meals: Meal[]
}

export function CalorieSummary({ meals }: Props) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const today = new Date().toDateString()
    let sum = 0
    for (const m of meals) {
      if (m.date === today) sum += m.cal
    }
    setTotal(sum)
  }, [meals])

  return (
    <Card>
      <Text style={c.summaryTotal}>{total} kcal</Text>
      <Text style={c.summaryGoal}>goal: {DAILY_GOAL} kcal</Text>
    </Card>
  )
}
