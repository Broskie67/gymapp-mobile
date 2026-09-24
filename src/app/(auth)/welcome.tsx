import { StyleSheet, Text, View } from "react-native";
import { GradientBackground } from "@/components/gradientBackground";
import  Logo  from "@/components/logo";
import { Colors } from "@/constants/colors";
import { router } from "expo-router";
import { Button } from "@/components/button";


export default function Welcome() {
  return (
    <GradientBackground style={styles.container}>
      <Logo />
      <Text style={styles.title}>Welcome</Text>
      <View style={{ gap: 16 }}>
        <Button title="Sign in" variant="outline" onPress={() => router.push("/login")} />
        <Button title="Sign up" variant="light" onPress={() => router.push("/signup")} />
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