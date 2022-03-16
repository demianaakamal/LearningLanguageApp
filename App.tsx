/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,

  StatusBar,
  StyleSheet,

} from 'react-native';
import {Provider} from 'react-redux';
import ExerciseScreen from './src/screens/ExerciseScreen';
import { COLORS } from './src/utlis/colors';
import myStore from "./src/store/ConfigStore";


const App = () => {
  

  return (
    <Provider store={myStore}>
      <SafeAreaView style={styles.safeAreaStyle}>
        <StatusBar backgroundColor={COLORS.PRIMARY_BACKGROUND} />
        <ExerciseScreen />
      </SafeAreaView>
     </Provider>
   
  );
};

const styles = StyleSheet.create({
  safeAreaStyle:{
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  }
});

export default App;
