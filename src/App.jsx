import Navegacion from './components/Navegacion.jsx'
import Header from './components/Header.jsx'
import Conocenos from './components/Conocenos.jsx'

function App() {
	return (
		<>
			<header className="header-app">
				<Navegacion />
				<Header />
			</header>
			<main>
				<Conocenos />
			</main>
		</>
	)
}

export default App
