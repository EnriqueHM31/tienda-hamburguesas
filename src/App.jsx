import Navegacion from './components/Navegacion.jsx'
import Header from './components/Header.jsx'
import Conocenos from './components/Conocenos.jsx'
import Productos from './components/Productos.jsx'
import DetallesProducto from './components/DetallesProducto.jsx'
import useProducto from './hooks/producto'
import useProductoInfo from './hooks/productoInfo.js'
import operarProductos from './hooks/operarProductos.js'
import Galeria from './components/Galeria.jsx'

function App() {
	const { productos } = useProducto()
	const { detalles, handleClick, handleClickRemove } = useProductoInfo({ productos })
	const { cantidadProductos, handleClickCantidadProductos } = operarProductos()

	return (
		<>
			<header className="header-app">
				<Navegacion cantidadProductos={cantidadProductos} />
				<Header />
			</header>
			<main>
				<Productos handleClickAgregar={handleClickCantidadProductos} productos={productos} detalles={detalles} handleClick={handleClick} />
				<Conocenos />
				<Galeria />
			</main>
			{detalles && <DetallesProducto detalles={detalles} handleClickRemove={handleClickRemove} />}
		</>
	)
}

export default App
