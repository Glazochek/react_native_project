import { Platform, StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'

export const tab = StyleSheet.create({
  bar: {
    backgroundColor: sem.background,
    borderTopColor: sem.border,
    borderTopWidth: Platform.OS === 'ios' ? 0.5 : 1,
    height: Platform.OS === 'ios' ? 88 : 64,
    paddingTop: 8,
  },
})

export const tabColors = {
  active: sem.accent,
  inactive: sem.textMuted,
}
