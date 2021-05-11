import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Dashboard from './dashboard';

describe('Given a dashboard component', () => {
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

  describe('When there is no argument', () => {
    test('It will create an <section>', () => {
      act(() => {
        render(<Dashboard />, container);
      });
      const section = container.querySelector('section');

      expect(section).toBeTruthy();
    });
  });
});
