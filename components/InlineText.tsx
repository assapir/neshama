import { SOURCES } from "@/constants/source";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, StyleSheet, View } from "react-native";

type Props = {
  letter: string;
};

const InlineText = ({ letter }: Props) => {
  const colorScheme = useThemeColor();
  const part = SOURCES.get(letter);
  if (!part) return null;

  return (
    <View>
      <Text
        key={`${letter}`}
        style={[styles.letter, { color: colorScheme.alternateText }]}
      >
        {letter}
      </Text>
      <Text
        key={`${letter}-paragraph`}
        style={[styles.paragraph, { color: colorScheme.alternateText }]}
      >
        {part}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  letter: {
    fontSize: 24,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: "auto",
  },
});

export default InlineText;
