import React from 'react';
import ChToGrams from './ChToGrams';
import Swiper from 'react-native-swiper';
import { calculateChInGrams, calculateGramsInCh } from '../services/calculators';
import GramsToCh from './GramsToCh';

/** @class */
class Main extends React.Component {
  state = {
    chPer100G: 0,
    chPerMeal: 0,
    grams: 0,
  };

  onFirstChPer100GramChange = chPer100G => {
    this.setState({
      chPer100G: Number(chPer100G),
      grams: calculateGramsInCh(chPer100G, this.state.chPerMeal),
    });
  };

  onFirstChPerMealChange = chPerMeal => {
    this.setState({
      chPerMeal: Number(chPerMeal),
      grams: calculateGramsInCh(this.state.chPer100G, chPerMeal),
    });
  };

  onSecondChPer100GramChange = chPer100G => {
    this.setState({
      chPer100G: Number(chPer100G),
      chPerMeal: calculateChInGrams(chPer100G, this.state.grams),
    });
  };

  onSecondGramsChange = grams => {
    this.setState({
      grams: Number(grams),
      chPerMeal: calculateChInGrams(this.state.chPer100G, grams),
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
        <GramsToCh
          chPer100G={this.state.chPer100G}
          chPerMeal={this.state.chPerMeal}
          grams={this.state.grams}
          onChPer100GramChange={this.onSecondChPer100GramChange}
          onChPerMealChange={this.onSecondGramsChange}
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
