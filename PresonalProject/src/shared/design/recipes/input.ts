import { StyleSheet } from 'react-native'

import * as sem from '../semantics/colors'
import * as t from '../primitives/typography'

export const input = StyleSheet.create({
  field: {
    backgroundColor: sem.surface,
    color: sem.text,
    borderRadius: 10,
    padding: 12,
    fontSize: t.sizeMd,
  },
})
