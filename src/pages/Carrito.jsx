import ProductosCarrito from '../components/ProductosCarrito.jsx'

export default function Carrito({ carrito, handleClickAgregarCantidad, handleClickQuitarCantidad, total }) {
	return (
		<>
			<div className="page">
				<h1>Carrito de compras</h1>

				<div className="contenedor-productos">
					<ProductosCarrito carrito={carrito} handleClickAgregarCantidad={handleClickAgregarCantidad} handleClickQuitarCantidad={handleClickQuitarCantidad} />
				</div>

				<div className=" pago-total">
					<div className="contenido-pago">
						<h2>Total:</h2>
						<span>${total}</span>
					</div>

					<button>Pagar</button>
				</div>
			</div>
		</>
	)
}
