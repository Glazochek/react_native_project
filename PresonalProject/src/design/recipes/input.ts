import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as space from '../primitives/spacing'
import * as radius from '../primitives/radius'
import * as t from '../primitives/typography'

export const input = StyleSheet.create({
  field: {
    borderWidth: 1,
    borderColor: sem.border,
    padding: 10,
    borderRadius: radius.sm,
    marginBottom: space.sm,
    fontSize: t.sizeMd,
    color: sem.text,
  },
  group: {
    padding: space.md,
  },
})
