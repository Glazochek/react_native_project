export type Meal = {
  id: number
  name: string
  cal: number
  date: string
}

export const DAILY_GOAL = 2000

export { useMealsStorage } from './useMealsStorage'
