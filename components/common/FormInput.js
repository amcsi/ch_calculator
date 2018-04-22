import React from 'react';
import { FormInput as RNEFormInput } from 'react-native-elements';
import defaultTextStyle from '../../data/defaultTextStyle';

/** @class */
function FormInput({ inputStyle, ...restProps }) {
  return (
    <RNEFormInput inputStyle={[defaultTextStyle, inputStyle]} {...restProps} />
  );
}

export default FormInput;
