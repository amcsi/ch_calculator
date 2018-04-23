import React from 'react';
import ChToGrams from './ChToGrams';
import Swiper from 'react-native-swiper';
import GramsToCh from './GramsToCh';
import { Linking, TouchableOpacity, View } from 'react-native';
import Text from './common/Text';

/** @class */
class Main extends React.Component {
  state = {
    chPer100G: 0,
    chPerMeal: 0,
    grams: 0,
  };

  onChPer100GramChange = chPer100G => {
    this.setState({
      chPer100G: Number(chPer100G),
    });
  };

  onChPerMealChange = chPerMeal => {
    this.setState({
      chPerMeal: Number(chPerMeal),
    });
  };

  onGramsChange = grams => {
    this.setState({
      grams: Number(grams),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper loop={false} activeDotColor="#249081" style={{ flex: 1 }}>
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
          <Text style={styles.credits}>
            Készítette:
          </Text>
          <Text> </Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.szeremi.org/')}>
            <Text>Szerémi Attila</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default Main;
