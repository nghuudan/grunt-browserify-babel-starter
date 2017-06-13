import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: props.appTitle
    };
  }
  render() {
    return <h1>{ this.state.appTitle }</h1>;
  }
}

App.propTypes = {
  appTitle: PropTypes.string
};
