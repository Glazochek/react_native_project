import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as t from '../primitives/typography'

export const text = StyleSheet.create({
  body: { fontSize: t.sizeMd, color: sem.text },
  muted: { fontSize: t.sizeMd, color: sem.textMuted },
  title: {
    fontSize: t.sizeXl,
    fontWeight: t.weightBold,
    color: sem.text,
  },
  label: {
    fontSize: t.sizeSm,
    color: sem.textMuted,
    marginBottom: 6,
    marginTop: 12,
  },
  accent: {
    fontSize: 36,
    fontWeight: t.weightBold,
    color: sem.accent,
    marginTop: 4,
  },
  link: {
    fontSize: t.sizeLg,
    color: sem.accent,
  },
  ringMain: {
    fontSize: t.sizeRing,
    fontWeight: t.weightBold,
    color: sem.accent,
  },
  ringSub: {
    fontSize: t.sizeMd,
    color: sem.textMuted,
    marginTop: 4,
  },
})
