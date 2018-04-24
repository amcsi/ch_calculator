import React from 'react';
import { FormInput as RNEFormInput } from 'react-native-elements';
import defaultTextStyle from '../../data/defaultTextStyle';
import { formInputBorderBottom, placeholderText } from '../../data/colors';

/** @class */
function FormInput({ inputStyle, placeholderTextColor, ...restProps }) {
  const borderBottomColor = formInputBorderBottom;
  const _inputStyle = { ...defaultTextStyle, borderBottomColor: borderBottomColor };
  return (
    <RNEFormInput
      inputStyle={[_inputStyle, inputStyle]}
      placeholderTextColor={placeholderTextColor || placeholderText}
      underlineColorAndroid={borderBottomColor}
      {...restProps}
    />
  );
}

export default FormInput;
