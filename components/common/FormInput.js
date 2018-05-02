import React from 'react';
import { FormInput as RNEFormInput } from 'react-native-elements';
import defaultTextStyle from '../../data/defaultTextStyle';
import { formInputBorderBottom, placeholderText } from '../../data/colors';

/** @class */
function FormInput({ containerStyle, inputStyle, placeholderTextColor, ...restProps }) {
  const borderBottomColor = formInputBorderBottom;
  const _containerStyle = { borderBottomColor: borderBottomColor };

  return (
    <RNEFormInput
      inputStyle={[defaultTextStyle, inputStyle]}
      containerStyle={[_containerStyle, containerStyle]}
      placeholderTextColor={placeholderTextColor || placeholderText}
      underlineColorAndroid={borderBottomColor}
      {...restProps}
    />
  );
}

export default FormInput;
