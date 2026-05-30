import { useState } from 'react'
import { Modal } from 'react-native'

import { Button, CalorieRing } from '#design/components'
import { Screen } from '#design/layouts'
import { getDailyCals, todayCals, useAppStuff } from '#shared'
import { LogMealScreen } from '#features/log'

export function SummaryScreen() {
  const { mealList, prof } = useAppStuff()
  const [showLog, setShowLog] = useState(false)
  const eaten = todayCals(mealList)
  const max = getDailyCals(prof)

  return (
    <>
      <Screen title="Summary" centered>
        <CalorieRing eaten={eaten} max={max} />
        <Button title="log meal" variant="primary" onPress={() => setShowLog(true)} />
      </Screen>

      <Modal visible={showLog} animationType="slide" presentationStyle="pageSheet">
        <LogMealScreen onDone={() => setShowLog(false)} />
      </Modal>
    </>
  )
}
