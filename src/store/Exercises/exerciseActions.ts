import { Choice, Exercise } from "../../utlis/interfaces";

export class exerciseActions {
  static SET_SELECTED_ANSWER = "SET_SELECTED_ANSWER";
  static setSelectedAnswer = (id: null | Choice) => {
    return {
      type: exerciseActions.SET_SELECTED_ANSWER,
      id,
    };
  };

  static SET_IS_CORRECT_ANSWER = "SET_IS_CORRECT_ANSWER";
  static setIsCorrectAnswer = (answer: null | boolean) => {
    return {
      type: exerciseActions.SET_IS_CORRECT_ANSWER,
      answer,
    };
  };
}
