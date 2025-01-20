import PagoTotal from '../components/PagoTotal.jsx'
import ProductosCarrito from '../components/ProductosCarrito.jsx'

export default function Carrito({ carrito, handleClickAgregarCantidad, handleClickQuitarCantidad, total }) {
	const dataProductos = { carrito, handleClickAgregarCantidad, handleClickQuitarCantidad }
	return (
		<>
			<div className="page">
				<h1>Carrito de compras</h1>

				<div className="contenedor-productos">
					<ProductosCarrito dataProductos={dataProductos} />
				</div>

				<PagoTotal total={total} />
			</div>
		</>
	)
}
