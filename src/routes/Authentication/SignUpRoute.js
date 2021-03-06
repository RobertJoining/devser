import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SignUp } from '../../components';

export class SignUpRoute extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.user ? <Redirect to="/" /> : <SignUp />}
      </React.Fragment>
    );
  }
}

SignUpRoute.propTypes = {
  user: PropTypes.object,
};
