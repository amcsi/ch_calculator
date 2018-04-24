import React from 'react';
import { FormattedWrapper } from 'react-native-globalize';
import Layout from './components/Layout';

//noinspection JSUnusedGlobalSymbols
export default class App extends React.Component {
  render() {
    return (
      <FormattedWrapper locale="hu" currency="HUF" messages={{}}>
        <Layout />
      </FormattedWrapper>
    );
  }
}
