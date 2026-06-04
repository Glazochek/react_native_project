import  { type ScrollViewProps, type StyleProp, type ViewStyle } from "react-native";
import { ScrollView } from "react-native";

import { screen as s } from "../../recipes/screen";
import Screen from "../Screen/Screen";

type Props = ScrollViewProps & {
  header?: React.ReactNode;
  children?: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

function ScreenScroll({
  header,
  children,
  contentContainerStyle,
  ...props
}: Props) {
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={[s.scrollContent, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {header}
        {children}
      </ScrollView>
    </Screen>
  );
}

export default ScreenScroll;
