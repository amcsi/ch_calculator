import React from 'react';
import { Text as RNText } from 'react-native';

/**
 * Form label with some styles on it already.
 *
 * @class
 **/
function Text({ style, ...restProps }) {
  const defaultStyle = [{ color: 'white' }];
  return (
    <RNText style={[defaultStyle, style]} {...restProps} />
  );
}

export default Text;
