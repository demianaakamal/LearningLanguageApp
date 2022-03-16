export interface Choice{
  id:string,answer:string
}

export interface Exercise {
  id: string;
  sentences:{english:string,german:string};
  choices: Choice[]
  correctChoice:Choice
}
export interface ExerciseSentenceProps{
    sentence: string;
    children?:React.FC<any> 
}
export interface ExerciseReducerState {
    selectedAnswer: null | Choice;
    isCorrectAnswer: null | boolean;
   
  }
  

  export interface ExAppState {
    exerciseState: ExerciseReducerState;
  }