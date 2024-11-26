
import { ProvedorEventos } from '@/data/contexts/ContextoEventos';
import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <ProvedorEventos>
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerShown: false
        }}
        />
      </Stack>
    </ProvedorEventos>
  )
}