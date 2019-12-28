import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './Main';
import Credits from './Credits';
import { background } from '../data/colors';

class Layout extends React.Component {
  render() {
    const MainNavigator = createStackNavigator({
      main: {
        screen: Main,
      },
      credits: { screen: Credits },
    }, {
      headerMode: 'screen',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: background,
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
      },
      lazy: true,
      swipeEnabled: false,
      cardStyle: { shadowColor: 'transparent' },
    });

    const App = createAppContainer(MainNavigator);

    return (
      <App style={styles.container} />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#00695C',
  },
  credits: {
    textAlign: 'center',
  },
};

export default Layout;
