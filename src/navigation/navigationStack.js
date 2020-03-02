import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Topics from '../pages/topics'
import TopicDescription from '../pages/topicDescription'
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }
const MainStack = createStackNavigator({
  Topics,
  TopicDescription
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerShown: false,
      headerVisible: false
    },
    defaultNavigationOptions: {
      // gesturesEnabled: false
      header: null,
    }
  });

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainStack,
  },
});

export default createAppContainer(AppNavigator);