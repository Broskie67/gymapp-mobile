import { Button } from "@/components/common/button";
import { GradientBackground } from "@/components/common/gradientBackground";
import Logo from "@/components/common/logo"
import { Colors } from "@/constants/colors";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  return (
    <GradientBackground style={styles.container}>
      <Logo />
      <Text style={styles.title}>Welcome</Text>
      <View style={{ gap: 16 }}>
        <Button
          title="Sign in"
          variant="outline"
          onPress={() => router.push("/signIn")}
        />
        <Button
          title="Sign up"
          variant="light"
          onPress={() => router.push("/signUp")}
        />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  title: {
    color: Colors.text,
    fontSize: 22,
  },
});
