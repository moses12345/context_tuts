import './App.css';
import Component from './componentssss.js';
import Setcompo from './Setcompo'
import { Using_provider } from './context/context_thing'
import { useState } from 'react'

function App() {
  const a="cool"
  const b=10
  const [posting, setposting] = useState("")
	return (
		<div className='App'>
			<h1>hello this is react</h1>
			<Using_provider value = {{posting , setposting}}>
				<Component />
				<Setcompo />
			</Using_provider>
		</div>
	);
}
export default App;
