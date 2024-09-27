import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function Input({ label, style, inputStyle, textInputConfig }) {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor="#858585"
        style={[styles.input, inputStyle]}
        {...textInputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary500,
    placeholderTextColor: GlobalStyles.colors.primary50,
    minHeight: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    color: GlobalStyles.colors.primary50,
  },
  label: {
    color: GlobalStyles.colors.primary50,
  },
});
