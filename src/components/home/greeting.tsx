import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

type GreetingProps = { name: string };

export function Greeting({ name }: GreetingProps) {
  const day = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good to see you, {name}!</Text>
      <Text style={styles.day}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 32 },
  title: { color: Colors.text, fontSize: 24, fontWeight: "bold" },
  day: { color: Colors.textMuted, fontSize: 20, marginTop: 4 },
});
