import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as space from '../primitives/spacing'
import * as t from '../primitives/typography'

export const list = StyleSheet.create({
  pad: {
    paddingHorizontal: space.md,
    paddingBottom: space.lg,
  },
  row: {
    backgroundColor: sem.surface,
    borderRadius: 12,
    padding: space.md,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowTitle: {
    color: sem.text,
    fontSize: t.sizeMd,
  },
  rowAccent: {
    color: sem.accent,
    fontSize: t.sizeMd,
    fontWeight: t.weightBold,
  },
  empty: {
    color: sem.textMuted,
    textAlign: 'center',
    marginTop: 40,
  },
})
