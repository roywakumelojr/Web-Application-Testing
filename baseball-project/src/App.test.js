import React from 'react';
import ReactDOM from 'react-dom';
import App , { strike, ball, hit } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('strike adds 1 point to the current score', () => {
  let actual;
  let expected;
  actual = strike(1);
  expected = 2;
  expect(actual).toBe(expected);
});

test('ball adds 1 point to the current score', () => {
  let actual;
  let expected;
  actual = ball(1);
  expected = 2;
  expect(actual).toBe(expected);
});

test('hit resets the current score', () => {
  let actual;
  let expected;
  actual = hit(7);
  expected = 0;
  expect(actual).toBe(expected);
});