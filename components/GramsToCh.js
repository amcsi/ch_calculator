import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { FormattedNumber } from 'react-native-globalize';
import FormInput from './common/FormInput';
import FormLabel from './common/FormLabel';
import Text from './common/Text';
import defaultTextStyle from '../data/defaultTextStyle';
import { calculateChInGrams } from '../services/calculators';

/** @class */
class ChToGrams extends React.Component {
  render() {
    const { chPer100G, grams, onChPer100GramChange, onGramsChange } = this.props;
    const chPerMeal = calculateChInGrams(chPer100G, grams);

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text>Hány gramm CH van ebben?</Text>

        <FormLabel>CH/100g</FormLabel>
        <FormInput
          keyboardType="numeric"
          selectTextOnFocus
          value={String(chPer100G) || ''}
          onChangeText={onChPer100GramChange}
        />

        <FormLabel>Súly</FormLabel>
        <FormInput
          keyboardType="numeric"
          selectTextOnFocus
          value={String(grams) || ''}
          onChangeText={onGramsChange}
        />

        {(() => {
          if (chPerMeal > 0) {
            return (
              <View style={{ flexDirection: 'row' }}>
                <FormattedNumber
                  value={chPerMeal}
                  style={defaultTextStyle}
                  maximumFractionDigits={0}
                />
                <Text> </Text>
                <Text>
                  g CH van a lemért összetevőben
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
