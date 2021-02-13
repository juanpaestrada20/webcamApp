import React, { useState } from 'react';
import './App.css';
import Webcam from 'react-webcam';

function App() {
	const [state, setState] = useState(false);
	const [action, setAction] = useState('Activar');
	const [message, setMessage] = useState(`Deberias de activa tu camarita <3`);
	const enableWebcam = () => {
		setState(!state);
		if (!state) {
			setMessage(`Mejor desactivala, estas feo :s`);
			setAction('Descativar');
		} else {
			setAction('Activar');
			setMessage(`Deberias de activa tu camarita <3`);
		}
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>{message}</h1>
				{state ? <Webcam /> : <></>}
			</header>
			<div className='button-box'>
				<button className='button-form' onClick={enableWebcam}>
					{action} Camara
				</button>
			</div>
			<div>
				<h3>Juan Pablo Estrada Aleman - 201800709</h3>
			</div>
		</div>
	);
}

export default App;
