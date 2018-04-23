import React from 'react';
import ChToGrams from './ChToGrams';
import Swiper from 'react-native-swiper';
import { calculateGramsInCh } from '../services/calculators';

/** @class */
class Main extends React.Component {
  state = {
    chPer100G: 0,
    chPerMeal: 0,
    grams: 0,
  };

  onFirstChPer100GramChange = chPer100G => {
    this.setState({
      chPer100G,
      grams: calculateGramsInCh(chPer100G, this.state.chPerMeal),
    });
  };

  onFirstChPerMealChange = chPerMeal => {
    this.setState({
      chPerMeal,
      grams: calculateGramsInCh(this.state.chPer100G, chPerMeal),
    });
  };

  render() {
    return (
      <Swiper loop={false} style={styles.container} activeDotColor="#249081">
        <ChToGrams
          chPer100G={this.state.chPer100G}
          chPerMeal={this.state.chPerMeal}
          grams={this.state.grams}
          onChPer100GramChange={this.onFirstChPer100GramChange}
          onChPerMealChange={this.onFirstChPerMealChange}
        />
      </Swiper>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#00695C',
  },
};

export default Main;
