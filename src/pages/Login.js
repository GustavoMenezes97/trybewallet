import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      logInButton: true,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => this.validations());
  }

  validations = () => {
    const { email, password } = this.state;
    const MIN_CARACTERS = 6;

    const emailValidation = /\S+@\S+\.\S+/; // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const passwordValidation = password.length >= MIN_CARACTERS;

    return emailValidation.test(email) && passwordValidation
      ? this.setState({ logInButton: false })
      : this.setState({ logInButton: true });
  }

  buttonFunction = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { addEmailDispatch, history } = this.props;
    addEmailDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, logInButton } = this.state;
    return (
      <form>
        <div>Login</div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            name="logInButton"
            disabled={ logInButton }
            onClick={ this.buttonFunction }
          >
            Entrar
          </button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  addEmailDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addEmailDispatch: (payload) => dispatch(addEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
