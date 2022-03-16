import { StyleSheet } from "react-native";
import { COLORS } from "../../utlis/colors";

export const styles = StyleSheet.create({
  boldTextStyle:{
   
      fontWeight: "bold",
      fontSize: 18,
      color: COLORS.PRIMARY_TEXT_COLOR,
    
  },
  container: {
      marginTop: 75,
      width: "100%",
      paddingTop: 20,
      paddingBottom: 50,
      paddingHorizontal: 20,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      
      minHeight: 125,
  },
  buttonContainer:{
    
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 15,

  },
  basicTextStyle: {
    fontWeight: "bold",
    color: COLORS.PRIMARY_TEXT_COLOR,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
