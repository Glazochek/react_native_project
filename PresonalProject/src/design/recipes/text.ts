import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as t from '../primitives/typography'
import * as space from '../primitives/spacing'

export const text = StyleSheet.create({
  body: { fontSize: t.sizeMd, color: sem.text },
  muted: { fontSize: t.sizeMd, color: sem.textMuted },
  title: {
    fontSize: t.sizeLg,
    fontWeight: t.weightBold,
    color: sem.text,
    padding: space.md,
  },
  label: {
    fontSize: t.sizeSm,
    fontWeight: t.weightBold,
    color: sem.text,
  },
})
