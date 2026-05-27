import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as space from '../primitives/spacing'
import * as radius from '../primitives/radius'
import * as t from '../primitives/typography'

export const card = StyleSheet.create({
  summary: {
    padding: space.md,
    margin: space.md,
    backgroundColor: sem.surface,
    borderRadius: radius.md,
  },
  summaryTotal: {
    fontSize: t.sizeXl,
    fontWeight: t.weightBold,
    color: sem.text,
  },
  summaryGoal: {
    marginTop: space.xs,
    fontSize: t.sizeMd,
    color: sem.textSubtle,
  },
})
