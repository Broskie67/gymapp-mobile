import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BurgerButton from '@/components/common/burgerButton';

export default function TabLayout() {
  const ACTIVE = '#ffd33d'
  const INACTIVE = '#fff'
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#15182B",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarInactiveTintColor: INACTIVE,
        tabBarActiveTintColor: ACTIVE,
        headerStyle: { backgroundColor: "#15182B"},
        headerTintColor: "#fff",
        headerShadowVisible: false,
        headerShown: true,
        headerLeft: () => <BurgerButton/>
      }}
    >
      <Tabs.Screen
       name="index" 
       options={{ 
        title: 'Home', 
        tabBarIcon: ({ focused}) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={focused ? ACTIVE : INACTIVE} size={24} />
        )
        }} />
      <Tabs.Screen 
      name="workoutScreen" 
      options={{ 
        title: 'Workouts',
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name="weight-lifter" size={24} color={focused ? ACTIVE : INACTIVE} />
        )
        }} />
    </Tabs>
  );
}