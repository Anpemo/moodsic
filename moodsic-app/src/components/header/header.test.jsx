import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from './header';

describe('Given a Header component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When there is no arguments', () => {
    test('It will create a <nav> tag', () => {
      act(() => {
        render(<BrowserRouter><Header /></BrowserRouter>, container);
      });
      const nav = container.querySelector('nav');

      expect(nav).toBeTruthy();
    });

    test('It will create a Link with the text Play Moodsic', () => {
      // Act
      act(() => {
        render(<BrowserRouter><Header><Link to="/" /></Header></BrowserRouter>, container);
      });
      const nav = container.querySelector('nav');
      // assert
      expect(nav).toBeTruthy();
    });
  });

  describe('When there authenticated', () => {
    test('It will create a <button> tag', () => {
      const isAuthenticated = true;

      act(() => {
        render(
          <BrowserRouter>
            {isAuthenticated && <Header />}
          </BrowserRouter>,
          container
        );
      });
      const button = container.querySelector('button');

      expect(button).toBeTruthy();
    });
  });
});
