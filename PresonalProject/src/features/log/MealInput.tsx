import { useState } from 'react'

import { Button, Input } from '#design/components'
import { Stack } from '#design/layouts'
import { Meal } from '#shared'

type Props = {
  onAdd: (m: Meal) => void
}

export function MealInput({ onAdd }: Props) {
  const [name, setName] = useState('')
  const [cal, setCal] = useState('')

  function handleAdd() {
    const n = name.trim()
    const c = Number(cal)
    if (!n || !c) return
    onAdd({
      id: Date.now(),
      name: n,
      cal: c,
      date: new Date().toDateString(),
    })
    setName('')
    setCal('')
  }

  return (
    <Stack>
      <Input placeholder="meal name" value={name} onChangeText={setName} />
      <Input placeholder="calories" value={cal} onChangeText={setCal} keyboardType="numeric" />
      <Button title="add meal" onPress={handleAdd} />
    </Stack>
  )
}
