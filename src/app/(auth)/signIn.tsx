import { Text, View, StyleSheet } from 'react-native'
import { Colors } from "@/constants/colors";

export default function SignIn() {
  <View>
    <Text>Sign In</Text>
  </View>
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