import { Text, StyleSheet, View } from "react-native";

type Props = {
  text: string;
};

const InlineTitle = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default InlineTitle;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
