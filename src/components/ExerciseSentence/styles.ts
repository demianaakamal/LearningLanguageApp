import {StyleSheet} from 'react-native';
import {COLORS} from '../../utlis/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    flexWrap: 'wrap',
    minHeight: 40,
  },
  basicTextStyle: {
    fontSize: 25,
    color: COLORS.PRIMARY_TEXT_COLOR,
  },
  choiceTextStyle:{
    fontWeight: 'bold',
    color:COLORS.PRIMARY_FOREGOUND
  },
  boldTextStyle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  chosenAnswer: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
