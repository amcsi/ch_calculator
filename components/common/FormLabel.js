import React from 'react';
import { FormLabel as RNEFormLabel } from 'react-native-elements';
import defaultTextStyle from '../../data/defaultTextStyle';

/**
 * Form label with some styles on it already.
 *
 * @class
 **/
function FormLabel({ labelStyle, ...restProps }) {
  return (
    <RNEFormLabel labelStyle={[defaultTextStyle, labelStyle]} {...restProps} />
  );
}

export default FormLabel;
