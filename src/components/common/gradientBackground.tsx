import { LinearGradient } from "expo-linear-gradient";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import { StyleProp, ViewStyle } from "react-native";
import { Colors } from "@/constants/colors";

type GradientBackgroundProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  edges?: Edge[];
  };

export function GradientBackground({ children, style, edges }: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView edges={edges} style={[{ flex: 1, padding: 20 }, style]}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}
