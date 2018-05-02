import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { FormattedNumber } from 'react-native-globalize';
import FormInput from './common/FormInput';
import FormLabel from './common/FormLabel';
import Text from './common/Text';
import { calculateGramsInCh } from '../services/calculators';
import { resultText } from '../data/defaultStyles';

/**
 * First page
 *
 * @class
 **/
class ChToGrams extends React.Component {
  render() {
    const { chPer100G, chPerMeal, onChPer100GramChange, onChPerMealChange } = this.props;
    const grams = calculateGramsInCh(chPer100G, chPerMeal);

    const textCenter = { textAlign: 'center' };
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={[resultText, textCenter]}>Hány grammban van ennyi CH?</Text>

        <FormLabel>CH/100g</FormLabel>
        <FormInput
          keyboardType="numeric"
          selectTextOnFocus
          value={chPer100G ? String(chPer100G) : ''}
          onChangeText={onChPer100GramChange}
          placeholder="CH/100g"
        />

        <FormLabel>CH/étkezés</FormLabel>
        <FormInput
          keyboardType="numeric"
          selectTextOnFocus
          value={chPerMeal ? String(chPerMeal) : ''}
          onChangeText={onChPerMealChange}
          placeholder="CH/étkezés"
        />

        <Text style={[textCenter, { opacity: grams > 0 ? 1 : 0 }]}>
          <FormattedNumber
            value={grams}
            style={resultText}
            maximumFractionDigits={0}
          />
          <Text style={resultText}> </Text>
          <Text style={resultText}>
            g összetevőben van ennyi CH
          </Text>
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});


export default ChToGrams;
