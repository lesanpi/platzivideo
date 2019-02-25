import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Playlist from './playlist';
import * as serviceWorker from './serviceWorker';
import data from './api.json'
import Home from './home'
//que voy a renderizar, donde lo hare
//ReactDOM.render(<App />, document.getElementById('root'));
/*
If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

*/
const homeContainer = document.getElementById('home-container');
ReactDOM.render(<Home data={data} />, homeContainer);

