import { StyleSheet } from "react-native"

import * as sem from "../semantics/colors"
import * as space from "../primitives/spacing"
import * as radius from "../primitives/radius"

export const card = StyleSheet.create({
  shell: {
    padding: space.lg,
    margin: space.md,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.lg,
    backgroundColor: sem.surface,
    boxShadow: `0px 2px 4px ${sem.shadow}`,
  },
  stack: {
    alignItems: "center",
    gap: space.md,
  },
  crewItem: {
    alignItems: "center",
    marginHorizontal: space.md,
    minWidth: 120,
  },
  crewRow: {
    flexGrow: 0,
    flexDirection: "row",
  },
})
