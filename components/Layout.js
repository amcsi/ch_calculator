import React from 'react';
import { StackNavigator } from 'react-navigation';
import Main from './Main';
import Credits from './Credits';
import { background } from '../data/colors';

class Layout extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      main: {
        screen: Main,
      },
      credits: { screen: Credits },
    }, {
      headerMode: 'screen',
      navigationOptions: {
        headerStyle: {
          backgroundColor: background,
        },
        headerTintColor: '#fff',
      },
      lazy: true,
      swipeEnabled: false,
      cardStyle: { shadowColor: 'transparent' },
    });

    return (
      <MainNavigator style={styles.container} />
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
