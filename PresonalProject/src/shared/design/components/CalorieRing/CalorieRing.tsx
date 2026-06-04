import { View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

import * as sem from '../../semantics/colors'
import { Text } from '../Text'

const sz = 230
const fat = 18
const r = (sz - fat) / 2
const around = 2 * Math.PI * r

type Props = {
  eaten: number
  max: number
}

export function CalorieRing({ eaten, max }: Props) {
  const part = max > 0 ? Math.min(eaten / max, 1) : 0
  const gap = around * (1 - part)

  return (
    <View
      style={{
        width: sz,
        height: sz,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Svg width={sz} height={sz} style={{ position: 'absolute' }}>
        <Circle
          cx={sz / 2}
          cy={sz / 2}
          r={r}
          stroke={sem.ringTrack}
          strokeWidth={fat}
          fill="none"
        />
        <Circle
          cx={sz / 2}
          cy={sz / 2}
          r={r}
          stroke={sem.accent}
          strokeWidth={fat}
          fill="none"
          strokeDasharray={`${around} ${around}`}
          strokeDashoffset={gap}
          strokeLinecap="round"
          rotation="-90"
          origin={`${sz / 2}, ${sz / 2}`}
        />
      </Svg>
      <Text variant="ringMain">{eaten}</Text>
      <Text variant="ringSub">/ {max} kcal</Text>
    </View>
  )
}
