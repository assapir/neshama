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

  const generateParagraphs = (hebrewName: string) => {
    const names = hebrewName.split(" ");
    const paragraphs = [];
    names.forEach((name, nameIndex) => {
      paragraphs.push(
        <InlineTitle
          key={`${name}-${nameIndex}-title`}
          text={`אותיות "${name}"`}
        />
      );
      paragraphs.push(
        name.split("").map((letter, index) => {
          return (
            <InlineText
              key={`${letter}-${nameIndex}-${index}`}
              letter={letter}
            />
          );
        })
      );
      paragraphs.push(<Separator key={`after-${name}-${nameIndex}`} />);
    });

    // Add NESHAMA section
    paragraphs.push(
      <>
        <InlineTitle key="neshama-title" text={`אותיות "נשמה"`} />
        {NESHAMA.split("").map((letter, index) => (
          <InlineText key={`neshama-${index}`} letter={letter} />
        ))}
      </>
    );

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
    padding: 16,
    textAlign: "right",
  },
});
