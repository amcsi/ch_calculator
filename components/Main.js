import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormInput from './common/FormInput';
import FormLabel from './common/FormLabel';
import Text from './common/Text';

/** @class */
class Main extends React.Component {
  state = {
    chPer100G: '0',
    chPerMeal: '0',
    resultGrams: null,
  };

  recalculateResult = () => {
    let resultGrams = null;
    if (this.state.chPer100G > 0) {
      resultGrams = ((this.state.chPerMeal * 100) / this.state.chPer100G);
    }
    this.setState({ resultGrams });
  };

  onChPer100GramChange = chPer100G => {
    this.setState({ chPer100G });
    this.recalculateResult();
  };

  onChPerMealChange = chPerMeal => {
    this.setState({ chPerMeal });
    this.recalculateResult();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hány grammban van ennyi CH?</Text>

        <FormLabel>CH/100g</FormLabel>
        <FormInput keyboardType="numeric" onChangeText={this.onChPer100GramChange} />

        <FormLabel>CH/étkezés</FormLabel>
        <FormInput keyboardType="numeric" onChangeText={this.onChPerMealChange} />

        {(() => {
          if (this.state.resultGrams !== null && this.state.resultGrams !== undefined) {
            return (
              <Text>
                {this.state.resultGrams} g összetevőben van ennyi CH
              </Text>
            );
          }
        })()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00695C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Main;
