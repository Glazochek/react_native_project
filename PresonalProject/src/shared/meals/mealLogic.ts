import type { DayRow, MealThing } from './types'

export function todayCals(list: MealThing[]) {
  const td = new Date().toDateString()
  let s = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i].date === td) s += list[i].cal
  }
  return s
}

export function makeMeal(
  name: string,
  calTxt: string,
  healthy: boolean,
): MealThing | null {
  const n = name.trim()
  const c = Number(calTxt)
  if (!n || !c || c <= 0) return null
  return {
    id: Date.now(),
    name: n,
    cal: c,
    date: new Date().toDateString(),
    healthy,
  }
}

export function todayMeals(list: MealThing[]) {
  const td = new Date().toDateString()
  const out: MealThing[] = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].date === td) out.push(list[i])
  }
  out.sort((a, b) => b.id - a.id)
  return out
}

export type MealSection = {
  title: string
  date: string
  total: number
  data: MealThing[]
}

export function mealSections(
  list: MealThing[],
  maxDays?: number,
): MealSection[] {
  const map: Record<string, MealThing[]> = {}
  for (let i = 0; i < list.length; i++) {
    const m = list[i]
    if (!map[m.date]) map[m.date] = []
    map[m.date].push(m)
  }
  const dates = Object.keys(map).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  )
  const pick = maxDays ? dates.slice(0, maxDays) : dates
  const out: MealSection[] = []
  for (let i = 0; i < pick.length; i++) {
    const date = pick[i]
    const meals = map[date]
    let total = 0
    for (let j = 0; j < meals.length; j++) total += meals[j].cal
    meals.sort((a, b) => b.id - a.id)
    out.push({ title: niceDate(date), date, total, data: meals })
  }
  return out
}

export function daysWithCals(list: MealThing[]): DayRow[] {
  const map: Record<string, number> = {}
  for (let i = 0; i < list.length; i++) {
    const m = list[i]
    if (!map[m.date]) map[m.date] = 0
    map[m.date] += m.cal
  }
  const keys = Object.keys(map)
  const out: DayRow[] = []
  for (let i = 0; i < keys.length; i++) {
    out.push({ date: keys[i], total: map[keys[i]] })
  }
  out.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return out
}

export function niceDate(d: string) {
  const x = new Date(d)
  if (Number.isNaN(x.getTime())) return d
  return x.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
