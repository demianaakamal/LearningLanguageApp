import React, {useEffect, useMemo, useRef} from 'react';
import {Text, View, Animated, ViewProps} from 'react-native';
import {useSelector} from 'react-redux';
import { COLORS } from '../../utlis/colors';
import {ExAppState, ExerciseSentenceProps} from '../../utlis/interfaces';
import {styles} from './styles';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();


  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};
export const ExerciseSentence = ({sentence}: ExerciseSentenceProps) => {


  const splitedsentence = sentence.split(/[""]/);
  const {selectedAnswer,isCorrectAnswer} = useSelector(
    (state: ExAppState) => state.exerciseState,
  );


const [choiceBackgroundColor,choiceTextcolor] = useMemo(() => {
  if (isCorrectAnswer) { // answerd and will go to next question
    return [COLORS.CORRECT_ANSWER_BACKGROUND,COLORS.WHITE];
  } else if (isCorrectAnswer===false) {  // answered and not checked his annswer yet 
    return [COLORS.WRONG_ANSWER_BACKGROUND,COLORS.WHITE];
  } else {
    return [COLORS.WHITE,COLORS.PRIMARY_FOREGOUND];  
  }
}, [isCorrectAnswer]);

  return (
    <View style={styles.container}>
      <Text style={styles.basicTextStyle}>{splitedsentence[0]}</Text>

      {splitedsentence[1] ? ( // means it's target word in english
        <Text style={[styles.basicTextStyle, styles.boldTextStyle]}>
          {splitedsentence[1]}
        </Text>
      ) : selectedAnswer != null ? ( // means it's missing word but has answer
        <FadeInView key={selectedAnswer?selectedAnswer.id:0} style={{...styles.chosenAnswer,backgroundColor:choiceBackgroundColor}}>
          <Text style={[styles.choiceTextStyle,{color:choiceTextcolor}]}>{selectedAnswer.answer}</Text>
        </FadeInView>
      ) : (
        // means it's missing word and no answer yet
        <Text style={styles.basicTextStyle}>__________</Text>
      )}

      <Text style={styles.basicTextStyle}>{splitedsentence[2]}</Text>
    </View>
  );
};
