import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Testa tela de login', () => {
  test('Verifica se existe a palavra "Login" na tela', () => {
    renderWithRouterAndRedux(<App />);

    const login = screen.getByText(/login/i);

    expect(login).toBeInTheDocument();
  });
  
  test('Verifica se existe os inputs de email e senha', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/senha/i);


    expect(email && password).toBeInTheDocument();
  });

  test('Verifica se ao preencher os inputs o botão "Entrar" habilita', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/senha/i);
    const button = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(email, 'trybe@vqv.com.br');
    userEvent.type(password, 'narutinhohokage');
    userEvent.click(button);

    const page = history.location.pathname;

    expect(page).toBe('/carteira')
  });
});