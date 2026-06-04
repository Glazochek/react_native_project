import  { type StyleProp, type ViewProps, type ViewStyle } from "react-native";
import { View } from "react-native";

import { card as c } from "../../recipes/card";

type Props = ViewProps & {
  align?: "center";
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export default function Stack({ align, style, children, ...props }: Props) {
  return (
    <View
      style={[c.stack, align === "center" && { alignItems: "center" }, style]}
      {...props}
    >
      {children}
    </View>
  );
}
