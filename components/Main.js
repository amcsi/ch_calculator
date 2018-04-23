import React from 'react';
import ChToGrams from './ChToGrams';
import Swiper from 'react-native-swiper';

/** @class */
function Main({}) {
  return (
    <Swiper loop={false} style={styles.container} activeDotColor="#249081">
      <ChToGrams />
      <ChToGrams />
    </Swiper>
  );
}

const styles = {
  container: {
    backgroundColor: '#00695C',
  },
};

export default Main;
