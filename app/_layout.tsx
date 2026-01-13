// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3b82f6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: '🚀 งานในสายอาชีพ IT',
        }}
      />
      <Stack.Screen
        name="job/[id]"
        options={{
          title: 'รายละเอียดงาน',
        }}
      />
    </Stack>
  );
}
