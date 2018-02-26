import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';

import css from './style.css';
// render(<p>Hello World</p>, document.querySelector('#root'));
render(<Header />, document.querySelector('#root'));