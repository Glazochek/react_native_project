import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import type { Meal } from './index'

const KEY = 'nomnom_meals'

export function useMealsStorage() {
  const [meals, setMeals] = useState<Meal[]>([])

  useEffect(() => {
    AsyncStorage.getItem(KEY).then(v => {
      if (!v) return
      setMeals(JSON.parse(v) as Meal[])
    })
  }, [])

  useEffect(() => {
    AsyncStorage.setItem(KEY, JSON.stringify(meals))
  }, [meals])

  function addMeal(m: Meal) {
    setMeals(prev => [...prev, m])
  }

  return { meals, addMeal }
}
