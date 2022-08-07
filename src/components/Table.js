import React, { Component } from 'react';

export default class Table extends Component {
  render() {
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
        </table>
      </div>
    );
  }
}
