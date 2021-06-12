import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './Components/Movie.css';
import NavBar from './Components/NavBar';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
        <NavBar/>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
