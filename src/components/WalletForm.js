import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoins } from '../redux/actions';

class WalletForm extends React.Component {
  componentDidMount() {
    const { fetchCoinsDispatch } = this.props;
    fetchCoinsDispatch();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <div>
            <label htmlFor="cost">
              Despesa:
              <input
                data-testid="value-input"
                type="number"
                name="cost"
                id="cost"
              />
            </label>
          </div>
          <div>
            <label htmlFor="costDescription">
              Descrição:
              <input
                data-testid="description-input"
                type="text"
                name="costDescription"
                id="costDescription"
              />
            </label>
          </div>
          <div>
            <label htmlFor="coins">
              Moeda:
              <select data-testid="currency-input" name="coins" id="coins">
                {currencies.map((item) => <option key={ item }>{item}</option>)}
              </select>
            </label>
          </div>
          <label htmlFor="payment">
            Método de pagamento:
            <select data-testid="method-input" name="payment" id="payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Categoria:
            <select data-testid="tag-input" name="category" id="category">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
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
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsDispatch: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
