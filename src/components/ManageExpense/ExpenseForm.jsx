import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../../UI/Button";

export default function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.form}>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "0.00",
            onChangeText: inputChangedHandler.bind(null, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(null, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        inputStyle={styles.descriptionInput}
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(null, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={cancelHandler} mode="flat">
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  rowInput: {
    flex: 1,
  },
  descriptionInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 9,
  },
});
