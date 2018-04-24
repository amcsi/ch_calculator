import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { FormattedNumber } from 'react-native-globalize';
import FormInput from './common/FormInput';
import FormLabel from './common/FormLabel';
import Text from './common/Text';
import defaultTextStyle from '../data/defaultTextStyle';
import { calculateGramsInCh } from '../services/calculators';

/**
 * First page
 *
 * @class
 **/
class ChToGrams extends React.Component {
  render() {
    const { chPer100G, chPerMeal, onChPer100GramChange, onChPerMealChange } = this.props;
    const grams = calculateGramsInCh(chPer100G, chPerMeal);

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text>Hány grammban van ennyi CH?</Text>

        <FormLabel>CH/100g</FormLabel>
        <FormInput
          keyboardType="numeric"
          selectTextOnFocus
          value={chPer100G ? String(chPer100G) : ''}
          onChangeText={onChPer100GramChange}
        />

        <FormLabel>CH/étkezés</FormLabel>
        <FormInput
          keyboardType="numeric"
          selectTextOnFocus
          value={chPerMeal ? String(chPerMeal) : ''}
          onChangeText={onChPerMealChange}
        />

        {(() => {
          if (grams > 0) {
            return (
              <View style={{ flexDirection: 'row' }}>
                <FormattedNumber
                  value={grams}
                  style={defaultTextStyle}
                  maximumFractionDigits={0}
                />
                <Text> </Text>
                <Text>
                  g összetevőben van ennyi CH
                </Text>
              </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default ChToGrams;
