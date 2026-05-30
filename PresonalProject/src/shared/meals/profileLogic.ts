import type { ProfileStuff } from './types'

function numOk(v: string) {
  const n = Number(v)
  return Number.isFinite(n) && n > 0 ? n : 0
}

export function getDailyCals(prof: ProfileStuff) {
  const age = numOk(prof.age)
  const w = numOk(prof.weightKg)
  const target = numOk(prof.targetWeightKg)
  const months = numOk(prof.months)
  if (!age || !w || !target || !months) return 2000

  const h = Math.round(Math.sqrt(w / 22) * 100)
  const bmr = prof.isMale
    ? 10 * w + 6.25 * h - 5 * age + 5
    : 10 * w + 6.25 * h - 5 * age - 161
  const tdee = bmr * 1.2
  const days = months * 30
  const lose = Math.max(0, w - target)

  if (lose > 0) {
    const cut = (lose * 7700) / days
    const goal = Math.round(tdee - cut)
    return Math.max(prof.isMale ? 1500 : 1200, goal)
  }

  const gain = Math.max(0, target - w)
  if (gain > 0) {
    const extra = (gain * 7700) / days
    return Math.round(tdee + extra)
  }

  return Math.round(tdee)
}
