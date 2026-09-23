import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#15182B",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: { backgroundColor: "#15182B"},
        headerTintColor: "#fff",
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
       name="index" 
       options={{ 
        title: 'Home', 
        tabBarIcon: ({ color, focused}) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        )
        }} />
      <Tabs.Screen 
      name="workoutScreen" 
      options={{ 
        title: 'Workouts',
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name="weight-lifter" size={24} color={color} />
        )
        }} />
    </Tabs>
  );
}