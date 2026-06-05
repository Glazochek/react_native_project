export function adjustDailyGoal(norm: number, dpValues: number[]) {
  const allDown = dpValues.length === 3 && dpValues.every((dp) => dp < 0)
  return allDown ? Math.round(norm * 1.2) : norm
}
