import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { appTitle } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.setAppTitle('App Works!');
  }
  render() {
    return <h1>{ this.props.appTitle }</h1>;
  }
}

App.propTypes = {
  appTitle: PropTypes.string,
  setAppTitle: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    appTitle: state.demo.appTitle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAppTitle: (title) => {
      dispatch(appTitle(title));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
