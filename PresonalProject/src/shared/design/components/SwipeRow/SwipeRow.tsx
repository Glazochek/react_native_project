import { useRef } from 'react'
import {
  Animated,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import * as sem from '../../semantics/colors'

const ACTION_W = 84

type Props = {
  children: React.ReactNode
  actionLabel: string
  onAction: () => void
  style?: StyleProp<ViewStyle>
}

export function SwipeRow({ children, actionLabel, onAction, style }: Props) {
  const rowRef = useRef<Swipeable>(null)

  function renderRightActions() {
    return (
      <View style={styles.actionWrap}>
        <RectButton
          style={styles.action}
          onPress={() => {
            rowRef.current?.close()
            onAction()
          }}
        >
          <Animated.Text style={styles.actionTxt}>{actionLabel}</Animated.Text>
        </RectButton>
      </View>
    )
  }

  return (
    <View style={style}>
      <Swipeable
        ref={rowRef}
        friction={2}
        rightThreshold={40}
        overshootRight={false}
        renderRightActions={renderRightActions}
      >
        {children}
      </Swipeable>
    </View>
  )
}

const styles = StyleSheet.create({
  actionWrap: {
    width: ACTION_W,
  },
  action: {
    flex: 1,
    backgroundColor: '#dc2626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionTxt: {
    color: sem.text,
    fontWeight: '700',
    fontSize: 14,
  },
})
