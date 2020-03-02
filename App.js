/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
import AppNavigator from './src/navigation/navigationStack'

console.disableYellowBox = true;

export default class App extends React.Component {
    componentDidMount () {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
      render() {
        return <AppNavigator />;
      }
    }
