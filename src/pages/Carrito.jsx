import PagoTotal from '../components/PagoTotal.jsx'
import ProductosCarrito from '../components/ProductosCarrito.jsx'

export default function Carrito({ carrito, handleClickAgregarCantidad, handleClickQuitarCantidad, total }) {
	return (
		<>
			<div className="page">
				<h1>Carrito de compras</h1>

				<div className="contenedor-productos">
					<ProductosCarrito carrito={carrito} handleClickAgregarCantidad={handleClickAgregarCantidad} handleClickQuitarCantidad={handleClickQuitarCantidad} />
				</div>

				<PagoTotal total={total} />
			</div>
		</>
	)
}
