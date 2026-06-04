import { type ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import * as sem from "../../semantics/colors";

const ACTION_W = 84;
const SNAP = -42;

type Props = {
  children: ReactNode;
  actionLabel: string;
  onAction: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function SwipeRow({
  children,
  actionLabel,
  onAction,
  style,
}: Props) {
  const shift = useSharedValue(0);
  const start = useSharedValue(0);

  const pan = Gesture.Pan()
    .activeOffsetX([-14, 14])
    .onBegin(() => {
      start.value = shift.value;
    })
    .onUpdate((e) => {
      const next = start.value + e.translationX;
      shift.value = Math.min(0, Math.max(-ACTION_W, next));
    })
    .onEnd(() => {
      shift.value = withSpring(shift.value < SNAP ? -ACTION_W : 0);
    });

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shift.value }],
  }));

  function onPressAction() {
    shift.value = withSpring(0);
    onAction();
  }

  return (
    <View style={[styles.wrap, style]}>
      <Pressable style={styles.action} onPress={onPressAction}>
        <Animated.Text style={styles.actionTxt}>{actionLabel}</Animated.Text>
      </Pressable>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.front, frontStyle]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    overflow: "hidden",
  },
  action: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: ACTION_W,
    backgroundColor: "#dc2626",
    alignItems: "center",
    justifyContent: "center",
  },
  actionTxt: {
    color: sem.text,
    fontWeight: "700",
    fontSize: 14,
  },
  front: {
    backgroundColor: sem.surface,
  },
});
