import { SOURCES } from "@/constants/source";
import { Text, StyleSheet, View } from "react-native";

type Props = {
  letter: string;
};

const InlineText = ({ letter }: Props) => {
  const part = SOURCES.get(letter);
  if (!part) return null;

  return (
    <View style={styles.container}>
      <Text key={`${letter}`} style={styles.letter}>
        {letter}
      </Text>
      <Text key={`${letter}-paragraph`} style={styles.paragraph}>
        {part}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  letter: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "right",
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: "right",
  },
});

export default InlineText;
