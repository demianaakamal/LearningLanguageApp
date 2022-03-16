import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {CheckAnswerButton} from '../../components/CheckAnswerButton';
import {ExerciseChoice} from '../../components/ExerciseChoice';
import {ExerciseSentence} from '../../components/ExerciseSentence';
import {Choice, ExAppState, Exercise} from '../../utlis/interfaces';
import {styles} from './styles';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {COLORS} from '../../utlis/colors';
import {useDispatch, useSelector} from 'react-redux';
import {exerciseActions} from '../../store/Exercises/exerciseActions';

const ExerciseScreen = () => {
  const {isCorrectAnswer} = useSelector(
    (state: ExAppState) => state.exerciseState,
  );
  const dispatch = useDispatch();
  const didMountRef = useRef<null | Boolean>(false);
  const currentExIndex = useRef<number>(0);
  const [currentEx, setCurrentEx] = useState<Exercise>();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const exercisesUnSubscribe = firebase
      .firestore()
      .collection('exercises')
      .onSnapshot(
        querySnapshot => {
          const exs: Exercise[] = [];
          querySnapshot.forEach(documentSnapshot => {
            exs.push({
              ...documentSnapshot.data(),
            } as Exercise);
          });
          setExercises(exs);
          setCurrentEx(exs[currentExIndex.current]);
          loading && setLoading(false);
        },
        error => {
          console.log('error', error);
        },
      );

    return () => exercisesUnSubscribe();
  }, []);
  useEffect(() => {
    if (didMountRef.current && isCorrectAnswer === null) {
      currentExIndex.current++;
      setCurrentEx(exercises[currentExIndex.current]);
      dispatch(exerciseActions.setSelectedAnswer(null));
    }

    didMountRef.current = true;
  }, [isCorrectAnswer]);

  return (
    <View style={styles.container}>
      {currentEx ? (
        <View style={styles.subContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.instruction}>Fill in the missing word </Text>

            <ExerciseSentence sentence={currentEx.sentences.english} />
            <ExerciseSentence sentence={currentEx.sentences.german} />

            <View style={styles.listContainer}>
              {currentEx.choices.map((item: Choice, index: number) => {
                return (
                  <ExerciseChoice key={index} choice={item} index={index} />
                );
              })}
            </View>
          </View>
          <CheckAnswerButton correctAnswer={currentEx.correctChoice} />
        </View>
      ) : loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={25} color={COLORS.WHITE} />
        </View>
      ) : (
        <View style={styles.loaderContainer}>
        <Text style={{fontSize: 20,color:COLORS.WHITE}}> Excellent!! You've completed your exercises  </Text>
        </View>
      )}
    </View>
  );
};
export default ExerciseScreen;
