import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      totalCost: 0,
      exchange: 'BRL',
    };
  }

  render() {
    const { userEmail } = this.props;
    const { totalCost, exchange } = this.state;
    return (
      <header>
        <span data-testid="email-field">{ userEmail }</span>
        <span data-testid="total-field">{ totalCost }</span>
        <span data-testid="header-currency-field">{ exchange }</span>
      </header>
    );
  }
}

Header.propTypes = ({
  userEmail: PropTypes.string.isRequired,
});

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
