import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import MiniCart from '../../../components/MiniCart';
import { RootState } from '../../../../../store';
import { describe, expect, test } from 'vitest';

const mockStore = configureStore<RootState>();

describe('MiniCart Component', () => {
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore({
      cart: {
        isMiniCartOpen: true,
        items: [
          { id: 1, title: 'Produto 1', price: 100, quantity: 1, image: 'img1.png', category: "Categoria Teste" },
          { id: 2, title: 'Produto 2', price: 200, quantity: 2, image: 'img2.png', category: "Categoria Teste" },
        ],
        totalAmount: 500,
        totalItems: 3,
      },
    });
  });

  test('deve renderizar os itens do carrinho corretamente', () => {
    render(
      <Provider store={store}>
        <MiniCart />
      </Provider>
    );

    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
  });

  test('deve exibir o total do carrinho', () => {
    render(
      <Provider store={store}>
        <MiniCart />
      </Provider>
    );

    expect(screen.getByText('R$ 500.00')).toBeInTheDocument();
  });

  test('deve fechar o MiniCart ao clicar no botão de fechar', () => {
    // test mobile
    global.innerWidth = 600; // Width < 768
    global.dispatchEvent(new Event('resize')); // Resize event
  
    render(
      <Provider store={store}>
        <MiniCart />
      </Provider>
    );
  
    screen.debug();

    const closeButton = screen.getByLabelText(/fechar/i);
  
    expect(closeButton).toBeInTheDocument();
  
    fireEvent.click(closeButton);
  
    const actions = store.getActions();
    expect(actions).toContainEqual({ type: 'cart/toggleMiniCart', payload: false });
  
    // Reset width
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
  });
});