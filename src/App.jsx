import Navegacion from './components/Navegacion.jsx'
import Header from './components/Header.jsx'
import Conocenos from './components/Conocenos.jsx'
import Productos from './components/Productos.jsx'
import DetallesProducto from './components/DetallesProducto.jsx'
import useProducto from './hooks/producto'
import useProductoInfo from './hooks/productoInfo.js'

function App() {
	const { productos } = useProducto()
	const { detalles, handleClick, handleClickRemove } = useProductoInfo({ productos })
	return (
		<>
			<header className="header-app">
				<Navegacion />
				<Header />
			</header>
			<main>
				<Productos productos={productos} detalles={detalles} handleClick={handleClick} />
				<Conocenos />
			</main>
			{detalles && <DetallesProducto detalles={detalles} handleClickRemove={handleClickRemove} />}
		</>
	)
}

export default App
