import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('Button has a correct intial color', () => {
  render(<App />);
  const buttonElem = screen.getByRole('button', {name: 'Change to blue'});
  
  expect(buttonElem).toHaveStyle({ backgroundColor: 'red' });
});

test('Button turns blue when click', () => {
  render(<App />);
  const buttonElem = screen.getByRole('button', {name: 'Change to blue'});
  act(() => {
    buttonElem.click();
  })
  
  expect(buttonElem).toHaveStyle({ backgroundColor: 'blue' });

  expect(buttonElem.textContent).toBe('Change to red');

});

test('initial conditions', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorBtn).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('is button enabled on render', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorBtn).toBeEnabled();
});

test('button is disabled/enabled when checkbox is clicked', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  

  const checkBox = screen.getByRole('checkbox');
  
  fireEvent.click(checkBox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorBtn).toBeEnabled();

});

test('red button turns gray when is disabled and red when is enabled', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox');

  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle({backgroundColor: 'gray'})

  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle({backgroundColor: 'red'});

});

test('blue button turns gray when is disabled and blue when is enabled', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(colorBtn);
  const checkBox = screen.getByRole('checkbox');

  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle({backgroundColor: 'gray'})

  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle({backgroundColor: 'blue'});

});

describe('Spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works ine inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
