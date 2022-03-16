import { StyleSheet } from "react-native";
import { COLORS } from "../../utlis/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor:COLORS.PRIMARY_BACKGROUND,
  },
  subContainer: {
    backgroundColor: COLORS.PRIMARY_FOREGOUND,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,

  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
  instruction:{
    color: COLORS.WHITE,
    fontSize: 10,
    marginBottom: 20,
  },
  listContainer: {
    marginTop: 40,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});