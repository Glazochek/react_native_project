import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as space from '../primitives/spacing'
import * as t from '../primitives/typography'

export const list = StyleSheet.create({
  content: {
    padding: space.md,
  },
  section: {
    padding: space.md,
    borderBottomWidth: 1,
    borderColor: sem.border,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: space.xs,
  },
  rowCal: {
    color: sem.textMuted,
  },
  date: {
    fontWeight: t.weightBold,
    marginBottom: space.sm,
    color: sem.textSubtle,
  },
  empty: {
    padding: space.lg,
    color: sem.textMuted,
    textAlign: 'center',
  },
})
