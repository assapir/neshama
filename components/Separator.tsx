import React from "react";
import { StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

const Separator = () => {
  const colors = useThemeColor();

  return <View style={[styles.separator, { backgroundColor: colors.text }]} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginVertical: 20,
  },
});
