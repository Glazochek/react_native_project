import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

import { emptyProfile, type MealThing, type ProfileStuff } from '../meals'

const MEALS_KEY = 'nomnom_meals'
const PROF_KEY = 'nomnom_prof'

type CtxType = {
  mealList: MealThing[]
  prof: ProfileStuff
  addMeal: (m: MealThing) => void
  patchProf: (p: Partial<ProfileStuff>) => void
}

const Ctx = createContext<CtxType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [mealList, setMealList] = useState<MealThing[]>([])
  const [prof, setProf] = useState<ProfileStuff>(emptyProfile)
  const [ok, setOk] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const mRaw = await AsyncStorage.getItem(MEALS_KEY)
        const pRaw = await AsyncStorage.getItem(PROF_KEY)
        if (mRaw) setMealList(JSON.parse(mRaw))
        if (pRaw) setProf({ ...emptyProfile, ...JSON.parse(pRaw) })
      } catch (_e) {}
      setOk(true)
    }
    load()
  }, [])

  useEffect(() => {
    if (!ok) return
    AsyncStorage.setItem(MEALS_KEY, JSON.stringify(mealList))
  }, [mealList, ok])

  useEffect(() => {
    if (!ok) return
    AsyncStorage.setItem(PROF_KEY, JSON.stringify(prof))
  }, [prof, ok])

  const addMeal = useCallback((m: MealThing) => {
    setMealList(old => [...old, m])
  }, [])

  const patchProf = useCallback((p: Partial<ProfileStuff>) => {
    setProf(old => ({ ...old, ...p }))
  }, [])

  return (
    <Ctx.Provider value={{ mealList, prof, addMeal, patchProf }}>{children}</Ctx.Provider>
  )
}

export function useAppStuff() {
  const v = useContext(Ctx)
  if (!v) throw new Error('no context')
  return v
}
