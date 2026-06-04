import  { type StyleProp, type ViewStyle } from "react-native";
import { View } from "react-native";

import { card as c } from "../../recipes/card";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function Card({ children, style }: Props) {
  return <View style={[c.shell, style]}>{children}</View>;
}
