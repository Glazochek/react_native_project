import { useState } from 'react'
import { View } from 'react-native'
import { fireEvent, render } from '@testing-library/react-native'

import { Button } from '../Button'
import { CalorieRing } from '../CalorieRing'
import { Input } from '../Input'
import { SwitchRow } from '../SwitchRow'
import { Text } from '../Text'

describe('shared components smoke', () => {
  it('renders Button', () => {
    const r = render(<Button title="save" onPress={() => {}} />)
    expect(r.toJSON()).toBeTruthy()
  })

  it('renders Input', () => {
    const r = render(<Input placeholder="type here" />)
    expect(r.toJSON()).toBeTruthy()
  })

  it('renders Text', () => {
    const r = render(<Text>hello</Text>)
    expect(r.toJSON()).toBeTruthy()
  })

  it('renders SwitchRow', () => {
    const r = render(
      <SwitchRow label="flag" value={false} onValueChange={() => {}} />,
    )
    expect(r.toJSON()).toBeTruthy()
  })

  it('renders CalorieRing', () => {
    const r = render(<CalorieRing eaten={1000} max={2000} />)
    expect(r.toJSON()).toBeTruthy()
  })
})

describe('Button unit', () => {
  it('calls onPress when user taps', () => {
    const onPress = jest.fn()
    const { getByText } = render(<Button title="log meal" onPress={onPress} />)
    fireEvent.press(getByText('log meal'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})

function InputHarness() {
  const [value, setValue] = useState('')
  return (
    <View>
      <Input placeholder="meal name" value={value} onChangeText={setValue} />
      <Text>{value || 'empty'}</Text>
    </View>
  )
}

describe('Input integration', () => {
  it('updates visible state when user types', () => {
    const { getByPlaceholderText, getByText } = render(<InputHarness />)
    fireEvent.changeText(getByPlaceholderText('meal name'), 'salad')
    expect(getByText('salad')).toBeTruthy()
  })
})
