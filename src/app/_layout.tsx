import { Stack } from 'expo-router';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_500Medium, Inter_700Bold 
} from "@expo-google-fonts/inter";
import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ 
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_700Bold 
  });

  const currentUser = useAuthStore((state) => state.currentUser)
  const isRestoring = useAuthStore((state) => state.isRestoring)
  const restoreSession = useAuthStore((state) => state.restoreSession)

  useEffect(() => {
    restoreSession()
  }, [restoreSession])

  if (!fontsLoaded || isRestoring) return null;

  const isLoggedIn = !!currentUser

  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
    </Stack>
  );
}
