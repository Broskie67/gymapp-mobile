import { Pressable, StyleSheet, Text, View, ViewStyle, StyleProp } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/colors";

type Varient = "gradient" | "outline" | "light"; 

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: Varient;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function Button({title, onPress, variant = "gradient", fullWidth = false, style}: ButtonProps) {
  const label = (
    <Text style={[styles.text, variant === "light" && styles.textDark]}>
      {title.toUpperCase()}
    </Text>
  );

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        fullWidth && styles.fullWidth,
        variant === "outline" && styles.outline,
        pressed && styles.pressed,
        style
      ]}
    >
      {variant === "light" ? (
        <View style={[styles.inner, styles.light]}>{label}</View>
      ) : (
        <LinearGradient
          colors={
            variant === "outline"
              ? [Colors.gradientStart, "transparent"]
              : [Colors.gradientStart, "#000"]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.inner}
        >
          {label}
        </LinearGradient>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 250,
    borderRadius: 999,
    overflow: "hidden",
  },
  inner: {
    paddingVertical: 10,
    alignItems: "center",
  },
  outline: {
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.7)",
  },
  light: {
    backgroundColor: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 13,
    letterSpacing: 1,
    fontFamily: "Inter_500Medium",
  },
  textDark: {
    color: Colors.gradientStart,
  },
  pressed: {
    opacity: 0.8,
  },
  fullWidth: {
    width: "100%",
  },
});
