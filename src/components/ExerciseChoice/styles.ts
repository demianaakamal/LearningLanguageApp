import { StyleSheet } from "react-native";
import { COLORS } from "../../utlis/colors";

export const styles = StyleSheet.create({
  basicTextStyle: {
    fontSize: 18,
    color: COLORS.PRIMARY_TEXT_COLOR,
  },
  subContainer: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
      minWidth: "45%",
      justifyContent: "center",
      margin: 5,
  },
});
