import { adjustDailyGoal } from '../adjustGoal'

describe('adjustDailyGoal', () => {
  it('adds 20% when all three stocks are down', () => {
    expect(adjustDailyGoal(2000, [-0.5, -1.2, -0.1])).toBe(2400)
  })

  it('keeps norm when one stock is flat', () => {
    expect(adjustDailyGoal(2000, [-1, 0, -2])).toBe(2000)
  })

  it('keeps norm when one stock is up', () => {
    expect(adjustDailyGoal(2000, [-1, 1.5, -2])).toBe(2000)
  })

  it('keeps norm when all stocks are up or flat', () => {
    expect(adjustDailyGoal(1800, [0, 0.5, 2])).toBe(1800)
  })
})
