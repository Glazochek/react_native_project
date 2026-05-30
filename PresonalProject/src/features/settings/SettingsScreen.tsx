import { ScrollView } from 'react-native'

import { Input, SwitchRow, Text } from '#design/components'
import { Screen } from '#design/layouts'
import { screen as scr } from '#design/recipes'
import { getDailyCals, useAppStuff } from '#shared'

export function SettingsScreen() {
  const { prof, patchProf } = useAppStuff()
  const goal = getDailyCals(prof)

  return (
    <Screen title="Settings">
      <ScrollView contentContainerStyle={scr.scrollPad}>
        <Text variant="label">age</Text>
        <Input
          placeholder="25"
          keyboardType="number-pad"
          value={prof.age}
          onChangeText={v => patchProf({ age: v })}
        />

        <Text variant="label">weight kg</Text>
        <Input
          placeholder="70"
          keyboardType="decimal-pad"
          value={prof.weightKg}
          onChangeText={v => patchProf({ weightKg: v })}
        />

        <Text variant="label">target weight kg</Text>
        <Input
          placeholder="65"
          keyboardType="decimal-pad"
          value={prof.targetWeightKg}
          onChangeText={v => patchProf({ targetWeightKg: v })}
        />

        <Text variant="label">months to goal</Text>
        <Input
          placeholder="6"
          keyboardType="number-pad"
          value={prof.months}
          onChangeText={v => patchProf({ months: v })}
        />

        <SwitchRow
          label={`gender: ${prof.isMale ? 'male' : 'female'}`}
          value={prof.isMale}
          onValueChange={v => patchProf({ isMale: v })}
        />

        <Text variant="label">min calories per day</Text>
        <Text variant="accent">{goal} kcal</Text>

        <SwitchRow
          label="healthy meal default"
          value={prof.healthyByDefault}
          onValueChange={v => patchProf({ healthyByDefault: v })}
        />
      </ScrollView>
    </Screen>
  )
}
