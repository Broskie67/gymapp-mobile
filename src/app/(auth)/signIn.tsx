import { SignInForm } from "@/components/auth/signInForm";
import { GradientBackground } from "@/components/common/gradientBackground";
import { Colors } from "@/constants/colors";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function SignIn() {
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior="padding"
      keyboardVerticalOffset={-10}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        <GradientBackground style={styles.header}>
          <Text style={styles.title}>Sign In</Text>
        </GradientBackground>

        <View style={styles.card}>
          <SignInForm />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const H_PADDING = 32;
const CARD_RADIUS = 28;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    height: 240,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: H_PADDING,
    paddingBottom: CARD_RADIUS + 28,
  },
  title: {
    color: Colors.text,
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  card: {
    flex: 1,
    marginTop: -CARD_RADIUS,
    backgroundColor: "#fff",
    borderTopLeftRadius: CARD_RADIUS,
    borderTopRightRadius: CARD_RADIUS,
    paddingHorizontal: H_PADDING,
    paddingTop: 40,
  },
});
