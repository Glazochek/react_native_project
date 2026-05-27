import { StyleSheet } from "react-native"

import * as sem from "../semantics/colors"
import * as space from "../primitives/spacing"
import * as radius from "../primitives/radius"

export const media = StyleSheet.create({
  apodImage: {
    width: "100%",
    height: 220,
    borderRadius: radius.sm,
    marginVertical: space.md,
    backgroundColor: sem.surfaceMuted,
  },
  apodBody: {
    marginTop: space.sm,
  },
  apodContent: {
    padding: space.md,
    paddingBottom: space.xl,
  },
})
