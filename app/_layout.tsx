import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";

export default function Layout() {
  const colorScheme = useThemeColor();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme.primary,
        },
        headerTintColor: colorScheme.background,
        headerTitleStyle: {
          color: colorScheme.background,
        },
        contentStyle: {
          backgroundColor: colorScheme.background,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "הכנסת שם",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="paragraph"
        options={{
          title: "פסוקים",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
