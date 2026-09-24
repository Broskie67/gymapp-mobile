import { LinearGradient } from "expo-linear-gradient";
import { StyleProp, ViewStyle } from "react-native";
import { Colors } from "@/constants/colors";

type GradientBackgroundProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function GradientBackground({ children, style }: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[{ flex: 1, padding: 20 }, style]}
    >
      {children}
    </LinearGradient>
  );
}
