import './App.css';
import Movie from './Components/Movie';
import { Route, Switch } from 'react-router-dom';
import SelectedMovie from './Components/SelectedMovie';
import ReactFacebookLogin from 'react-facebook-login';
import { useEffect, useState } from 'react';

function App() {
	const [token, setToken] = useState('');
	const [name, setName] = useState('');
	let facebookResponse = (res) => {
		setToken(res.accessToken);
		setName(res.name);
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
			setName(localStorage.getItem('name'));
		}
	}, []);

	useEffect(() => {
		if (token) {
			localStorage.setItem('token', token);
			localStorage.setItem('name', name);
		}
	});
	return (
		<div className='App'>
				<div className={`container-fluid mt-4 text-center`}>
					{!token ? (
						<ReactFacebookLogin
							appId='191782532726779'
							autoLoad={false}
							fields='name,email,picture'
							callback={facebookResponse}
						/>
					) : (
						<Switch>
							<Route exact path='/' component={Movie} />
							<Route exact path='/details/:id' component={SelectedMovie} />
						</Switch>
					)}
				</div>
		</div>
	);
}

export default App;
