import { View, StyleSheet, Text, Linking } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

const CopyrightBox = () => {
  const colors = useThemeColor();

  return (
    <View style={styles.copyrightBox}>
      <Text style={[styles.copyrightText, { color: colors.text }]}>
        2024 אסף ספיר |{" "}
        <Text
          style={[styles.link, { color: colors.primary }]}
          onPress={() => Linking.openURL("https://opensource.org/licenses/MIT")}
        >
          MIT License
        </Text>
        {" | "}
        <Text
          style={[styles.link, { color: colors.primary }]}
          onPress={() => Linking.openURL("https://github.com/assapir/neshama")}
        >
          GitHub
        </Text>
      </Text>
    </View>
  );
};

export default CopyrightBox;

const styles = StyleSheet.create({
  copyrightBox: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
    borderRadius: 8,
  },
  copyrightText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  link: {
    textDecorationLine: "underline",
  },
});
