import colors from "@/constants/colors";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.background,
        headerTitleStyle: {
          color: colors.background,
        },
        contentStyle: {
          backgroundColor: colors.background,
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
