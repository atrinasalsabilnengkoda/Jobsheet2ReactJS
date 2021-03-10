import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloComponent from './component/HelloComponent';
import Test from './Test';
import BlogPost from './container/BlogPost/BlogPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(<BlogPost />, document.getElementById('content'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();