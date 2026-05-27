import { StyleSheet } from "react-native"

import * as sem from "../semantics/colors"
import * as space from "../primitives/spacing"

export const screen = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: sem.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: space.md,
    alignItems: "stretch",
  },
  centered: {
    flex: 1,
    padding: space.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    paddingTop: space.sm,
  },
  hint: {
    alignItems: "center",
    marginBottom: space.sm,
  },
})
