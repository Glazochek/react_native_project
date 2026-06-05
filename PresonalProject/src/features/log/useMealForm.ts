import { useCallback, useState } from 'react'

import { makeMeal, type MealThing } from '#shared'

type Opts = {
  healthyByDefault: boolean
  onAdd: (m: MealThing) => void
}

export function useMealForm({ healthyByDefault, onAdd }: Opts) {
  const [nm, setNm] = useState('')
  const [calStr, setCalStr] = useState('')
  const [hlthy, setHlthy] = useState(healthyByDefault)

  const save = useCallback(() => {
    const m = makeMeal(nm, calStr, hlthy)
    if (!m) return false
    onAdd(m)
    setNm('')
    setCalStr('')
    setHlthy(healthyByDefault)
    return true
  }, [nm, calStr, hlthy, healthyByDefault, onAdd])

  return { nm, setNm, calStr, setCalStr, hlthy, setHlthy, save }
}
