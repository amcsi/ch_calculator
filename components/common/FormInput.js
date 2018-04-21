import React from 'react';
import { FormInput as RNEFormInput } from 'react-native-elements';

/** @class */
function FormInput({ inputStyle, ...restProps }) {
  const defaultStyle = { color: 'white' };
  return (
    <RNEFormInput inputStyle={[defaultStyle, inputStyle]} {...restProps} />
  );
}

export default FormInput;
