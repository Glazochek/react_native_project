import { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native'


function CalorieSummary({ meals }: { meals: any[] }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let sum = 0
    for (let i = 0; i < meals.length; i++) {
      sum += meals[i].cal
    }
    setTotal(sum)
  }, [meals])

  return (
    <View style={s.box}>
      <Text style={s.label}>Todays calories</Text>
      <Text style={s.num}>{total} kcal</Text>
    </View>
  )
}


function MealItem({ item }: { item: any }) {
  return (
    <View style={s2.row}>
      <Text style={s2.name}>{item.name}</Text>
      <Text style={s2.cal}>{item.cal} kcal</Text>
    </View>
  )
}

function MealInput({ onAdd }: { onAdd: (m: any) => void }) {
  const [name, setName] = useState('')
  const [cal, setCal] = useState('')

  function handleAdd() {
    if (!name || !cal) return
    onAdd({ name, cal: parseInt(cal), id: Date.now() })
    setName('')
    setCal('')
  }

  return (
    <View style={s3.wrap}>
      <TextInput
        style={s3.input}
        placeholder="what did you eat?"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={s3.input}
        placeholder="calories"
        value={cal}
        onChangeText={setCal}
        keyboardType="numeric"
      />
      <Button title="add" onPress={handleAdd} />
    </View>
  )
}

// main app
export default function App() {
  const [meals, setMeals] = useState<any[]>([])

  function addMeal(m: any) {
    setMeals([...meals, m])
  }

  return (
    <View style={main.container}>
      <Text style={main.title}>NomNom 🍔</Text>
      <CalorieSummary meals={meals} />
      <MealInput onAdd={addMeal} />
      <FlatList
        data={meals}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  )
}

const main = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
})

const s = StyleSheet.create({
  box: { backgroundColor: '#f0f0f0', padding: 16, borderRadius: 8, marginBottom: 16 },
  label: { fontSize: 14, color: '#888' },
  num: { fontSize: 32, fontWeight: 'bold' },
})

const s2 = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#eee' },
  name: { fontSize: 16 },
  cal: { fontSize: 16, color: '#888' },
})

const s3 = StyleSheet.create({
  wrap: { marginBottom: 16, gap: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, fontSize: 16 },
})