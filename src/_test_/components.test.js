import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Routes } from 'react-router-dom';
import store from '../redux/configureStore';
import Main from '../pages/mainInc';
import Each from '../components/Finance/Each';
import Home from '../components/Finance/Home';
import Top from '../components/Finance/Top';

test('All comapnies component renders correctly', () => {
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Main />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Companies Data should Pass', () => {
  const mockStore = [
    {
      changes: 1.97,
      changesPercentage: '39.32135',
      companyName: 'Grove, Inc.',
      price: '11.91',
      ticker: 'GRVI',
    },
    {
      changes: 2.47,
      changesPercentage: '"26.165258"',
      companyName: 'NRx Pharmaceuticals, Inc.',
      price: '6.98',
      ticker: 'NRXP',
    },
  ];
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Home nasdaq={mockStore} />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Companies Data should Pass', () => {
  const mockStore = [
    {
      changes: 1.97,
      changesPercentage: '39.32135',
      companyName: 'Grove, Inc.',
      price: '11.91',
      ticker: 'GRVI',
    },
    {
      changes: 2.47,
      changesPercentage: '"26.165258"',
      companyName: 'NRx Pharmaceuticals, Inc.',
      price: '6.98',
      ticker: 'NRXP',
    },
  ];
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Home nasdaq={mockStore} />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toBeTruthy();
});

test('Banner of home page should be displaying', () => {
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Top />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Banner of home page should be displaying', () => {
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Top />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toBeTruthy();
});

test('each company data should shows', () => {
  const i = 1;
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Each name="AAPL" price="450" index={i} company="APPLE INC" />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('each company data should shows', () => {
  const i = 1;
  const tree = renderer
    .create(
      <Routes>
        <Provider store={store}>
          <Each name="AAPL" price="450" index={i} company="APPLE INC" />
        </Provider>
      </Routes>,
    )
    .toJSON();
  expect(tree).toBeTruthy();
});
