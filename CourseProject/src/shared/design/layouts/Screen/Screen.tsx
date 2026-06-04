import  { type StyleProp, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { screen as s } from "../../recipes/screen";

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

function Screen({ style, children, ...props }: Props) {
  return (
    <SafeAreaView style={[s.safe, style]} {...props}>
      {children}
    </SafeAreaView>
  );
}

export default Screen;
