import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as space from '../primitives/spacing'
import * as t from '../primitives/typography'

export const button = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: space.lg,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  default: {
    backgroundColor: sem.surface,
  },
  primary: {
    backgroundColor: sem.accent,
    width: '100%',
    maxWidth: 300,
  },
  label: {
    color: sem.text,
    fontSize: t.sizeLg,
    fontWeight: t.weightSemibold,
  },
  labelPrimary: {
    color: sem.onAccent,
    fontSize: t.sizeLg,
    fontWeight: t.weightBold,
  },
})
