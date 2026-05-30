import { Button, Input, SwitchRow, Text } from '#design/components'
import { ModalScreen } from '#design/layouts'
import { useAppStuff } from '#shared'

import { useMealForm } from './useMealForm'

type Props = {
  onDone: () => void
}

export function LogMealScreen({ onDone }: Props) {
  const { addMeal, prof } = useAppStuff()
  const form = useMealForm({
    healthyByDefault: prof.healthyByDefault,
    onAdd: addMeal,
  })

  function onSave() {
    if (form.save()) onDone()
  }

  return (
    <ModalScreen title="Log meal" onClose={onDone}>
      <Text variant="label">name</Text>
      <Input placeholder="food" value={form.nm} onChangeText={form.setNm} />

      <Text variant="label">calories</Text>
      <Input
        placeholder="300"
        keyboardType="number-pad"
        value={form.calStr}
        onChangeText={form.setCalStr}
      />

      <SwitchRow label="healthy" value={form.hlthy} onValueChange={form.setHlthy} />

      <Button title="save" variant="primary" onPress={onSave} />
    </ModalScreen>
  )
}
