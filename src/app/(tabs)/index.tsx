import { StyleSheet, Text, Pressable } from "react-native";
import { Card } from "../../components/common/card";
import { GradientBackground } from "../../components/common/gradientBackground";
import { Greeting } from "../../components/home/greeting";
import { TextLink } from "../../components/common/textLink";
import { Colors } from "../../constants/colors";
import { useAuthStore } from '@/store/authStore';


export default function Index() {
  const currentUser = useAuthStore((state) => state.currentUser)
  const logout = useAuthStore((state) => state.logout)
  return (
    <GradientBackground>
      <Greeting name={currentUser?.username} />
      <Card title="Your personal selection of the day">
        <Text style={styles.body}>No custom selection</Text>
        <Text style={styles.body}>
          Create new lists or add week's day to your existing workout
        </Text>
        <TextLink href="/workoutScreen">See workouts →</TextLink>
      </Card>
      <Card title="Upcoming">
        <Text style={styles.body}>No upcoming</Text>
      </Card>
      <Pressable onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </Pressable>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    color: Colors.text,
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: Colors.text,   // adapte à une couleur de ton fichier colors
    fontFamily: 'Inter_500Medium',
},
});
