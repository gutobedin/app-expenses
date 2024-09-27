import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useContext } from "react";
import { GlobalStyles } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import Button from "../UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpenses({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  function deleteExpenseHandler() {
    navigation.goBack();
    expensesCtx.deleteExpense(editedExpenseId);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Test!!!!",
        amount: 29.99,
        date: new Date("2024-09-22"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date("2024-09-23"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <Ionicons
            name="trash"
            size={24}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
