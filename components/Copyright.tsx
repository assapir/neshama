import { View, StyleSheet, Text, Linking } from "react-native";

const CopyrightBox = () => (
  <View style={styles.copyrightBox}>
    <Text style={styles.copyrightText}>
      2024 אסף ספיר |{" "}
      <Text
        style={styles.link}
        onPress={() => Linking.openURL("https://opensource.org/licenses/MIT")}
      >
        MIT License
      </Text>
      {" | "}
      <Text
        style={styles.link}
        onPress={() => Linking.openURL("https://github.com/assapir/neshama")}
      >
        GitHub
      </Text>
    </Text>
  </View>
);

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
    color: "#333",
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
