import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  I18nManager,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import CopyrightBox from "@/components/Copyright";

export default function Index() {
  const [hebrewName, setHebrewName] = useState("");
  const [isValidHebrew, setIsValidHebrew] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Force RTL layout
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
    }
  }, []);

  const handleTextChange = (text: string) => {
    setHebrewName(text);

    // Regular expression to match Hebrew characters
    const hebrewRegex = /^[\u0590-\u05FF\s]*$/;
    const isValid = hebrewRegex.test(text);

    setIsValidHebrew(isValid);
  };

  const handleButtonPress = () => {
    if (isValidHebrew && hebrewName.trim()) {
      router.push({
        pathname: "/paragraph",
        params: { name: hebrewName },
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, !isValidHebrew && styles.invalidInput]}
          placeholder="הכנסת שם"
          value={hebrewName}
          onChangeText={handleTextChange}
          textAlign="right"
        />
        <Text
          style={[
            styles.errorText,
            (isValidHebrew || hebrewName === "") && styles.hiddenError,
          ]}
        >
          נא להזין אותיות בעברית בלבד
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          (!isValidHebrew || !hebrewName.trim()) && styles.disabledButton,
        ]}
        disabled={!isValidHebrew || !hebrewName.trim()}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>הצגת פסוקים</Text>
      </TouchableOpacity>
      <CopyrightBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    textAlign: "right",
  },
  invalidInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    textAlign: "right",
    marginTop: 4,
    height: 20, // Set a fixed height
  },
  hiddenError: {
    opacity: 0,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
