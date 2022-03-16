import React, { useEffect, useRef, useState} from 'react';
import {Animated,  Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector, } from 'react-redux';
import { exerciseActions } from '../../store/Exercises/exerciseActions';
import {COLORS} from '../../utlis/colors';
import { Choice, ExAppState } from '../../utlis/interfaces';

import {styles} from './styles';

export interface choiceProps{
    choice:Choice,
    index:number
}

export const ExerciseChoice = ({choice,index}:choiceProps) => {
  
  const dispatch = useDispatch();
  const { selectedAnswer,isCorrectAnswer} = useSelector(
    (state:ExAppState) => state.exerciseState
  );
  const isSelected = useRef(false);


  useEffect(() => {
    if (selectedAnswer?.id === choice.id) {
      isSelected.current=true;
    } else if (isSelected.current) {
      isSelected.current=false;

    }
    ()=>{
      dispatch(exerciseActions.setSelectedAnswer(null));
    }
  }, [selectedAnswer]);


  return (
    <View style={[styles.container,{alignItems: index % 2 === 0 ? "flex-end" : "flex-start"}]}>
      <TouchableOpacity
        activeOpacity={1}
        disabled={isCorrectAnswer !==null}
        style={[styles.subContainer, {backgroundColor: COLORS.WHITE}]}
        onPress={() => {
          
          dispatch(exerciseActions.setSelectedAnswer(isSelected.current ? null : choice));
        }}>
        <Text style={{fontWeight: 'bold', color:COLORS.PRIMARY_FOREGOUND}}>{choice.answer}</Text>
      </TouchableOpacity>
    </View>
  );
};
