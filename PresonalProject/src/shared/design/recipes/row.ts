import { StyleSheet } from 'react-native'

import * as space from '../primitives/spacing'

export const row = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: space.sm,
  },
})
