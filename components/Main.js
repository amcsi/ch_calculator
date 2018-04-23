import React from 'react';
import ChToGrams from './ChToGrams';
import Swiper from 'react-native-swiper';
import GramsToCh from './GramsToCh';

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
      <Swiper loop={false} style={styles.container} activeDotColor="#249081">
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
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#00695C',
  },
};

export default Main;
