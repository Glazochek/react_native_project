import { Screen } from '#design/layouts'
import { Meal } from '#shared'

import { MealInput } from './MealInput'
import { MealList } from './MealList'

type Props = {
  meals: Meal[]
  onAdd: (m: Meal) => void
}

export function LogScreen({ meals, onAdd }: Props) {
  return (
    <Screen>
      <MealInput onAdd={onAdd} />
      <MealList meals={meals} />
    </Screen>
  )
}
