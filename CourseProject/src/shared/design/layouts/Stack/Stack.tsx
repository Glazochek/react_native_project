import { View } from "react-native";

import { card as c } from "../../recipes/card";

export default function Stack({ align, style, children, ...props }: any) {
  return (
    <View
      style={[c.stack, align === "center" && { alignItems: "center" }, style]}
      {...props}
    >
      {children}
    </View>
  );
}
