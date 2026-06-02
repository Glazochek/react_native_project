import { useState } from "react"
import { fireEvent, render } from "@testing-library/react-native"

import { Button, Card, Text } from ".."

describe("shared components smoke", () => {
  it("renders Button", () => {
    const r = render(<Button title="save" onPress={() => {}} />)
    expect(r.toJSON()).toBeTruthy()
  })

  it("renders Card", () => {
    const r = render(
      <Card>
        <Text>hello</Text>
      </Card>,
    )
    expect(r.toJSON()).toBeTruthy()
  })

  it("renders Text", () => {
    const r = render(<Text>plain text</Text>)
    expect(r.toJSON()).toBeTruthy()
  })
})

describe("Button unit", () => {
  it("calls onPress when tapped", () => {
    const onPress = jest.fn()
    const { getByText } = render(<Button title="add" onPress={onPress} />)

    fireEvent.press(getByText("add"))

    expect(onPress).toHaveBeenCalledTimes(1)
  })
})

function CardHarness() {
  const [count, setCount] = useState(0)
  return (
    <Card>
      <Text>count: {count}</Text>
      <Button title="plus" onPress={() => setCount(v => v + 1)} />
    </Card>
  )
}

describe("Card integration", () => {
  it("renders children and updates on user action", () => {
    const { getByText } = render(<CardHarness />)

    fireEvent.press(getByText("plus"))

    expect(getByText("count: 1")).toBeTruthy()
  })
})
