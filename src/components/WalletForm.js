import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoins, receiveExpenses } from '../redux/actions';
import exchangesAPI from '../API/exchangeAPI';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { fetchCoinsDispatch } = this.props;
    fetchCoinsDispatch();
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  buttonFunction = async (event) => {
    event.preventDefault();
    const { id } = this.state;
    const { receiveExpensesDispatch } = this.props;
    const data = await exchangesAPI();
    this.setState({
      exchangeRates: data,
    }, () => receiveExpensesDispatch(this.state));
    this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="value">
              Despesa:
              <input
                data-testid="value-input"
                type="number"
                name="value"
                id="value"
                value={ value }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Descrição:
              <input
                data-testid="description-input"
                type="text"
                name="description"
                id="description"
                value={ description }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="currency">
              Moeda:
              <select
                data-testid="currency-input"
                name="currency"
                id="currency"
                value={ currency }
                onChange={ this.handleChange }
              >
                {currencies.map((item) => <option key={ item }>{item}</option>)}
              </select>
            </label>
          </div>
          <label htmlFor="method">
            Método de pagamento:
            <select
              data-testid="method-input"
              name="method"
              id="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <div>
            <button
              type="submit"
              name="SendCostButton"
              onClick={ this.buttonFunction }
            >
              Adicionar despesa
            </button>
          </div>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  fetchCoinsDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  receiveExpensesDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsDispatch: () => dispatch(fetchCoins()),
  receiveExpensesDispatch: (payload) => dispatch(receiveExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
