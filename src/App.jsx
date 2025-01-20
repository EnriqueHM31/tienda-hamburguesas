//COMPONENTES
import Navegacion from './components/Navegacion.jsx'
import DetallesProducto from './components/DetallesProducto.jsx'

//Pages
import Carrito from './pages/Carrito.jsx'
import Header from './pages/Header.jsx'
import Conocenos from './pages/Conocenos.jsx'
import Productos from './pages/Productos.jsx'
import Galeria from './pages/Galeria.jsx'
//HOOOKS
import useProducto from './hooks/producto'
import useProductoInfo from './hooks/productoInfo.js'
import operarProductos from './hooks/operarProductos.js'
//Navegacion
import { Routes, Route } from 'react-router-dom'

function App() {
	const { productos, categorias, handleClickCategoria } = useProducto()
	const { detalles, handleClick, handleClickRemove } = useProductoInfo({ productos })
	const { cantidadProductos, handleClickCantidadProductos, carrito, handleClickAgregarCantidad, handleClickQuitarCantidad, total } = operarProductos()

	return (
		<>
			<Navegacion cantidadProductos={cantidadProductos} />

			<Routes>
				<Route path="/" element={<Header />} />
				<Route
					path="/productos"
					element={
						<Productos
							categorias={categorias}
							handleClickCategoria={handleClickCategoria}
							handleClickAgregar={handleClickCantidadProductos}
							productos={productos}
							detalles={detalles}
							handleClick={handleClick}
						/>
					}
				/>
				<Route path="/conocenos" element={<Conocenos />} />
				<Route path="/galeria" element={<Galeria />} />
				<Route
					path="/carrito"
					element={<Carrito carrito={carrito} handleClickAgregarCantidad={handleClickAgregarCantidad} handleClickQuitarCantidad={handleClickQuitarCantidad} total={total} />}
				/>
			</Routes>
			{detalles && <DetallesProducto detalles={detalles} handleClickRemove={handleClickRemove} />}
		</>
	)
}

export default App
