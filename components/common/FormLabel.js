import React from 'react';
import { FormLabel as RNEFormLabel } from 'react-native-elements';

/**
 * Form label with some styles on it already.
 *
 * @class
 **/
function FormLabel({ labelStyle, ...restProps }) {
  const defaultStyle = { color: 'white' };
  return (
    <RNEFormLabel labelStyle={[defaultStyle, labelStyle]} {...restProps} />
  );
}

export default FormLabel;
