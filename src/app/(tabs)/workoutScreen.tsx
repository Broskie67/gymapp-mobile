import { Text, View, StyleSheet } from 'react-native'

export default function workoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>workout</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292759",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: '#fff',
  },
})