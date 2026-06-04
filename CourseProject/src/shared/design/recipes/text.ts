import { StyleSheet } from "react-native";

import * as sem from "../semantics/colors";
import * as t from "../primitives/typography";

export const text = StyleSheet.create({
  normal: { fontSize: t.sizeMd, color: sem.text },
  large: { fontSize: t.sizeLg, color: sem.text },
  muted: { fontSize: t.sizeMd, color: sem.textMuted },
  label: {
    fontSize: t.sizeSm,
    fontWeight: t.weightBold,
    color: sem.text,
  },
  title: { fontSize: t.sizeXl, color: sem.text },
});
