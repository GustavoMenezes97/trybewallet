import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTr } from '../redux/actions';

class Table extends Component {
  deleteButton = (id) => {
    const { expenses, deleteTrDispatch } = this.props;
    const newExpenses = expenses.filter((item) => item.id !== id);
    deleteTrDispatch(newExpenses);
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    const header = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <div>
        <table>
          <thead>
            <tr>
              {header.map((item) => <th key={ item }>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {expenses.map((item) => (
              <tr key={ item.id }>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{Number(item.value).toFixed(2)}</td>
                <td>{item.exchangeRates[item.currency].name}</td>
                <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
                <td>
                  {Number(item.exchangeRates[item.currency].ask * item.value)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => this.deleteButton(item.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  deleteTrDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTrDispatch: (payload) => dispatch(deleteTr(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
