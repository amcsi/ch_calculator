import React from 'react';
import { FormattedWrapper } from 'react-native-globalize';
import Main from './components/Main';

export default class App extends React.Component {
  render() {
    return (
      <FormattedWrapper locale="hu" currency="HUF" messages={{}}>
        <Main />
      </FormattedWrapper>
    );
  }
}
