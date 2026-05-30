export type MealThing = {
  id: number
  name: string
  cal: number
  date: string
  healthy?: boolean
}

export type ProfileStuff = {
  age: string
  weightKg: string
  targetWeightKg: string
  months: string
  isMale: boolean
  healthyByDefault: boolean
}

export const emptyProfile: ProfileStuff = {
  age: '',
  weightKg: '',
  targetWeightKg: '',
  months: '',
  isMale: true,
  healthyByDefault: false,
}

export type DayRow = { date: string; total: number }
