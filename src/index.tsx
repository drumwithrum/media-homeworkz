import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import initializeInternalization from 'i18n';
import Views from 'views';
import * as serviceWorker from './serviceWorker';

initializeInternalization();

ReactDOM.render(
  <Views />,
  document.getElementById('root'),
);
serviceWorker.unregister();
