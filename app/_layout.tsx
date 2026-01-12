import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}></Stack>
      <Stack.Screen name="home" options={{ title: 'Home' }} />
    </Stack>
  );
}
