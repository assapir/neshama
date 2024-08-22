import React, { useEffect } from "react";
import { I18nManager, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { NESHAMA } from "@/constants/source";
import InlineTitle from "@/components/InlineTitle";
import InlineText from "@/components/InlineText";
import Separator from "@/components/Separator";

export default function ParagraphScreen() {
  useEffect(() => {
    // Force RTL layout
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
    }
  }, []);

  const { name } = useLocalSearchParams();

  const generateWord = (word: string, idx: number) => {
    return word
      .split("")
      .map((letter, index) => (
        <InlineText key={`${idx}-${word}-${letter}-${index}`} letter={letter} />
      ));
  };

  const generateParagraphs = (hebrewName: string) => {
    const names = hebrewName.split(" ");
    const paragraphs: React.JSX.Element[] = [];
    names.forEach((name, nameIndex) => {
      paragraphs.push(
        <InlineTitle
          key={`${name}-${nameIndex}-title`}
          text={`אותיות "${name}"`}
        />
      );
      paragraphs.push(...generateWord(name, nameIndex));
      paragraphs.push(<Separator key={`after-${name}-${nameIndex}`} />);
    });

    paragraphs.push(<InlineTitle key="neshama-title" text={`אותיות "נשמה"`} />);
    // Add NESHAMA section
    paragraphs.push(...generateWord(NESHAMA, 99999999));

    return paragraphs;
  };

  return (
    <ScrollView style={styles.container}>
      {generateParagraphs(name as string)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
    textAlign: "right",
  },
});
