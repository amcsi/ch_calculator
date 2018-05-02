import React from 'react';
import { Text as RNText } from 'react-native';
import defaultTextStyle from '../../data/defaultTextStyle';

/**
 * Form label with some styles on it already.
 *
 * @class
 **/
function Text({ style, ...restProps }) {
  const defaultStyle = [defaultTextStyle];
  return (
    <RNText style={[defaultStyle, style]} {...restProps} />
  );
}

export default Text;
