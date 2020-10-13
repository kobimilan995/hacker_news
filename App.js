import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {POSTS_MAIN_SCREEN} from './src/constants/routes';
import PostsMainScreen from './src/features/posts/screens/Main';
import mainScreenOptions from './src/features/posts/screens/options/main';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={POSTS_MAIN_SCREEN}
              component={PostsMainScreen}
              options={mainScreenOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
