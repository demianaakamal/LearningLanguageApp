import { combineReducers } from "redux";
import { exerciseReducer } from "./Exercises/exerciseReducer";

const rootReducer = combineReducers({
  exerciseState: exerciseReducer.reduce,
});

export default rootReducer;
