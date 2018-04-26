import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { FormattedNumber } from 'react-native-globalize';
import FormInput from './common/FormInput';
import FormLabel from './common/FormLabel';
import Text from './common/Text';
import { calculateChInGrams } from '../services/calculators';
import { resultText } from '../data/defaultStyles';

/** @class */
class ChToGrams extends React.Component {
  render() {
    const { chPer100G, grams, onChPer100GramChange, onGramsChange } = this.props;
    const chPerMeal = calculateChInGrams(chPer100G, grams);

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={resultText}>Hány gramm CH van ebben?</Text>

        <FormLabel>CH/100g</FormLabel>
        <FormInput
          keyboardType="numeric"
          selectTextOnFocus
          value={chPer100G ? String(chPer100G) : ''}
          onChangeText={onChPer100GramChange}
          placeholder="CH/100g"
        />

        <FormLabel>Súly</FormLabel>
        <FormInput
          keyboardType="numeric"
          selectTextOnFocus
          value={grams ? String(grams) : ''}
          onChangeText={onGramsChange}
          placeholder="Súly (g)"
        />

        <View style={{ flexDirection: 'row', opacity: grams > 0 ? 1 : 0 }}>
          <FormattedNumber
            value={chPerMeal}
            style={resultText}
            maximumFractionDigits={0}
          />
          <Text style={resultText}> </Text>
          <Text style={resultText}>
            g CH van a lemért összetevőben
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default ChToGrams;
