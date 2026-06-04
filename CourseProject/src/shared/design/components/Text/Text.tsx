import { Link } from "expo-router";
import { Text as RNText } from "react-native";

import { text as s } from "../../recipes/text";

type Props = {
  variant?: keyof typeof s;
  children: React.ReactNode;
  href?: string;
  style?: any;
  replace?: boolean;
  push?: boolean;
};

function Text({ variant = "normal", children, href, style, ...rest }: Props) {
  const st = s[variant];

  if (href) {
    return (
      <Link href={href as any} style={[st, style]} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <RNText style={[st, style]} {...rest}>
      {children}
    </RNText>
  );
}

export default Text;
