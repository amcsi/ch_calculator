import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import FormInput from './common/FormInput';
import FormLabel from './common/FormLabel';
import Text from './common/Text';

/** @class */
class Main extends React.Component {
  state = {
    chPer100G: '0',
    chPerMeal: '0',
  };

  calculateResultGrams = () => {
    let resultGrams = null;
    if (this.state.chPer100G > 0) {
      resultGrams = ((this.state.chPerMeal * 100) / this.state.chPer100G);
    }
    return resultGrams;
  };

  onChPer100GramChange = chPer100G => {
    this.setState({ chPer100G });
  };

  onChPerMealChange = chPerMeal => {
    this.setState({ chPerMeal });
  };

  render() {
    const resultGrams = this.calculateResultGrams();

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text>Hány grammban van ennyi CH?</Text>

        <FormLabel>CH/100g</FormLabel>
        <FormInput keyboardType="numeric" selectTextOnFocus onChangeText={this.onChPer100GramChange} />

        <FormLabel>CH/étkezés</FormLabel>
        <FormInput keyboardType="numeric" selectTextOnFocus onChangeText={this.onChPerMealChange} />

        {(() => {
          if (resultGrams > 0) {
            return (
              <Text>
                {resultGrams} g összetevőben van ennyi CH
              </Text>
            );
          }
        })()}
      </KeyboardAvoidingView>
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
