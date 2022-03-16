import React, { useMemo, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../utlis/colors";
import { Choice, ExAppState} from '../../utlis/interfaces';
import { exerciseActions } from "../../store/Exercises/exerciseActions";
import { styles } from "./styles";

export const CheckAnswerButton = ({ correctAnswer }:{correctAnswer:Choice},) => {
  const { selectedAnswer,isCorrectAnswer  } = useSelector(
    (state: ExAppState) => state.exerciseState
  );
  const dispatch = useDispatch();

  const [answerStateColor, answerHint] = useMemo(() => {
    if (isCorrectAnswer) {
      return [COLORS.CORRECT_ANSWER_BACKGROUND, "Great Job"];
    } else if (isCorrectAnswer === false) {
      return [COLORS.WRONG_ANSWER_BACKGROUND, `Answer : ${correctAnswer.answer}`];
    } else {
      return [null, null];
    }
  }, [isCorrectAnswer]);

  const [buttonBackgroundColor, buttonTitle] = useMemo(() => {
    if (selectedAnswer && isCorrectAnswer!==null) { // answerd and will go to next question
      return [COLORS.WHITE, "CONTINUE"];
    } else if (selectedAnswer && isCorrectAnswer===null) {  // answered and not checked his annswer yet 
      return [COLORS.CORRECT_ANSWER_BACKGROUND, "CHECK ANSWER"];
    } else {
      return [COLORS.SHADOW_BACKGROUND, "CONTINUE"];  
    }
  }, [selectedAnswer, isCorrectAnswer]);

  const checkUserAnswer = () => {
    if (selectedAnswer?.id ===correctAnswer.id) {
      dispatch(exerciseActions.setIsCorrectAnswer(true));
    } else {
      dispatch(exerciseActions.setIsCorrectAnswer(false));
    }
  };

  return (
    <View style={[styles.container,{backgroundColor: answerStateColor || "transparent"}]}>
      <Text style={styles.basicTextStyle}>{answerHint}</Text>
      <TouchableOpacity
        style={[styles.buttonContainer,{backgroundColor:buttonBackgroundColor}]}
        disabled={!selectedAnswer}
        onPress={() => {
          if (isCorrectAnswer!==null) {
            dispatch(exerciseActions.setIsCorrectAnswer(null));  //no selected answer        
          } else {
            checkUserAnswer();
          }
        }}
      >
        <Text style={[styles.boldTextStyle,{color:answerStateColor|| COLORS.PRIMARY_TEXT_COLOR}]}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
