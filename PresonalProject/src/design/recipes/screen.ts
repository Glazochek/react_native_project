import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as space from '../primitives/spacing'

export const screen = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: sem.background,
  },
  scroll: {
    flexGrow: 1,
    padding: space.md,
  },
  padded: {
    flex: 1,
    padding: space.md,
  },
})
