import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants/colors";

export function GradientBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, padding: 20 }}
    >
      {children}
    </LinearGradient>
  );
}
