import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { SafeAreaView } from 'react-navigation';
import { alternativeText } from '../data/colors';
import { view } from '../data/defaultStyles';
import ChToGrams from './ChToGrams';
import Text from './common/Text';
import GramsToCh from './GramsToCh';

/** @class */
class Main extends React.Component {
  state = {
    chPer100G: 0,
    chPerMeal: 0,
    grams: 0,
  };

  //noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    header: null,
  };

  onChPer100GramChange = chPer100G => {
    this.setState({
      chPer100G: chPer100G,
    });
  };

  onChPerMealChange = chPerMeal => {
    this.setState({
      chPerMeal: chPerMeal,
    });
  };

  onGramsChange = grams => {
    this.setState({
      grams: grams,
    });
  };

  render() {
    const deviceWidth = Dimensions.get('window').width;
    return (
      <SafeAreaView style={[view, styles.container]}>
        <Swiper loop={false} activeDotColor="#249081" containerStyle={{ width: deviceWidth }}>
          <ChToGrams
            chPer100G={this.state.chPer100G}
            chPerMeal={this.state.chPerMeal}
            onChPer100GramChange={this.onChPer100GramChange}
            onChPerMealChange={this.onChPerMealChange}
          />
          <GramsToCh
            chPer100G={this.state.chPer100G}
            grams={this.state.grams}
            onChPer100GramChange={this.onChPer100GramChange}
            onGramsChange={this.onGramsChange}
          />
        </Swiper>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('credits')}>
            <Text style={{ color: alternativeText }}>Készítette: Szerémi Attila</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingBottom: 20,
    display: 'flex',
    backgroundColor: '#00695C',
  },
};

export default Main;
