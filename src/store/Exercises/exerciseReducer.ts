import { exerciseActions } from "./exerciseActions";

export class  exerciseReducer{

  static INITIAL_STATE: any = {
    selectedAnswer: null,
    isCorrectAnswer: null,
    
  };

  static reduce = (
    state = exerciseReducer.INITIAL_STATE,
    action: Record<string, any>
  ) => {
    switch (action.type) {
      case exerciseActions.SET_SELECTED_ANSWER:
        return { ...state, selectedAnswer: action.id };

      case exerciseActions.SET_IS_CORRECT_ANSWER:
        return { ...state, isCorrectAnswer: action.answer };

      default:
        return state;
    }
  };
}
