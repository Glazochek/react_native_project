import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as space from '../primitives/spacing'
import * as radius from '../primitives/radius'
import * as t from '../primitives/typography'

export const button = StyleSheet.create({
  base: {
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    borderRadius: radius.sm,
    backgroundColor: sem.accent,
    alignItems: 'center',
  },
  label: {
    color: sem.background,
    fontSize: t.sizeMd,
    fontWeight: t.weightBold,
  },
})
