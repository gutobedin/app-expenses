import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import getFormattedDate from "../../util/date";

export default function ExpenseItem({ description, amount, date, id }) {
  const navigation = useNavigation();
  function expensePressedHandler() {
    navigation.navigate("ManageExpenses", {
      expenseId: id,
    });
  }
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={expensePressedHandler}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    elevation: 3,
    shadowColor: GlobalStyles.colors.primary500,
    shadowRadius: 4,
    shadowOffset: { widthL: 1, height: 1 },
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontSize: 16,
    fontWeight: "bold",
  },
});
