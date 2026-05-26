import { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
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
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="meal name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={s.input}
        placeholder="calories"
        value={cal}
        onChangeText={setCal}
        keyboardType="numeric"
      />
      <Button title="add meal" onPress={handleAdd} />
    </View>
  )
}

const s = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
  },
})
