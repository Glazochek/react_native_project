import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as space from '../primitives/spacing'

export const screen = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: sem.background,
  },
  header: {
    paddingHorizontal: space.md,
    paddingTop: space.sm,
    paddingBottom: space.md,
  },
  body: {
    flex: 1,
    paddingHorizontal: space.md,
  },
  bodyCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: space.lg,
    gap: 36,
  },
  scrollPad: {
    paddingHorizontal: space.md,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: space.md,
    paddingTop: space.sm,
    paddingBottom: space.md,
  },
  formCenter: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: space.lg,
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
})
