import React from 'react';
import ChToGrams from './ChToGrams';
import Swiper from 'react-native-swiper';

/** @class */
function Main({}) {
  return (
    <Swiper>
      <ChToGrams />
      <ChToGrams />
    </Swiper>
  );
}

export default Main;
