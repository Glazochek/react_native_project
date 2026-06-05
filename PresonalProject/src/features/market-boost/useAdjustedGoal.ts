import { useCallback, useEffect, useState } from 'react'

import { adjustDailyGoal } from './adjustGoal'
import { fetchTopStockDps } from './finnhub'

type Status = 'loading' | 'ready' | 'error'

export function useAdjustedGoal(norm: number) {
  const [requestId, setRequestId] = useState(0)
  const [fulfilledKey, setFulfilledKey] = useState('')
  const [goal, setGoal] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fetchKey = `${norm}-${requestId}`

  let status: Status = 'loading'
  if (fulfilledKey === fetchKey) {
    status = error ? 'error' : 'ready'
  }

  const reload = useCallback(() => {
    setRequestId((v) => v + 1)
  }, [])

  useEffect(() => {
    const key = fetchKey
    let cancelled = false

    void fetchTopStockDps()
      .then((dps) => {
        if (cancelled) return
        setGoal(adjustDailyGoal(norm, dps))
        setError(null)
        setFulfilledKey(key)
      })
      .catch((e) => {
        if (cancelled) return
        setGoal(null)
        setError(e instanceof Error ? e.message : 'market data unavailable')
        setFulfilledKey(key)
      })

    return () => {
      cancelled = true
    }
  }, [norm, requestId, fetchKey])

  return { status, goal, error, reload }
}
