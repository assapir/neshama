/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import COLORS from "@/constants/colors";
import { useColorScheme } from "react-native";

export function useThemeColor() {
  const theme = useColorScheme() ?? "light";
  return COLORS[theme];
}
