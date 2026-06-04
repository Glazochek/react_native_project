import { Pressable, Text, StyleSheet } from "react-native";

import * as radius from "../../primitives/radius";
import * as space from "../../primitives/spacing";
import * as t from "../../primitives/typography";
import * as sem from "../../semantics/colors";

const s = StyleSheet.create({
  base: {
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    borderRadius: radius.sm,
    backgroundColor: sem.accent,
    alignItems: "center",
  },
  label: {
    color: sem.background,
    fontSize: t.sizeMd,
    fontWeight: t.weightBold,
  },
});

type Props = {
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: Props) => (
  <Pressable style={s.base} onPress={onPress}>
    <Text style={s.label}>{title}</Text>
  </Pressable>
);

export default Button;
