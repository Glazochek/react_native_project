import  { type StyleProp, type ViewProps, type ViewStyle } from "react-native";
import { View } from "react-native";

import { screen as s } from "../../recipes/screen";

type Props = ViewProps & {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const Center = ({ style, children, ...props }: Props) => (
  <View style={[s.centered, style]} {...props}>
    {children}
  </View>
);

export default Center;
