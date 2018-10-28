import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
