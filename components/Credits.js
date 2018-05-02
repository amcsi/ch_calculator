import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { view } from '../data/defaultStyles';
import Text from './common/Text';
import { alternativeText } from '../data/colors';

class Credits extends React.Component {
  //noinspection JSUnusedGlobalSymbols
  static navigationOptions = {
    title: 'Az alkalmazásról',
  };

  render() {
    return (
      <View style={[view, styles.container]}>
        <View style={styles.textContainer}>
          <TextLine>Az alkalmazás az <Link href="https://www.facebook.com/groups/428087894039073/">Inzulinrezisztens
            Étrend</Link> Facebook csoporthoz készült.</TextLine>
          <TextLine><Link href="https://codepen.io/csuszka/full/EEBBPa">Böngészőből is
            elérhető</Link> ez az
            alkalmazás.</TextLine>
          <TextLine>A mobilos alkalmazást készítette: <Link href="http://www.szeremi.org/">Szerémi
            Attila</Link>.</TextLine>
          <TextLine>Az alkalmazás <Link href="https://github.com/amcsi/ch-calculator">nyílt
            forráskódú.</Link></TextLine>
          <TextLine>Sok köszönet <Link href="https://github.com/csuszka">Puskás Noéminek</Link>, aki
            az az eredeti böngészős alkalmazást csinálta.</TextLine>
        </View>
      </View>
    );
  }
}

const TextLine = ({ style, ...restProps }) => <Text
  style={[
    { marginTop: 5, marginBottom: 5 },
    style,
  ]} {...restProps} />;

function Link({ href, style, ...restProps }) {
  return <Text
    onPress={() => Linking.openURL(href)}
    style={[{ color: alternativeText }, style]} {...restProps} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Credits;
