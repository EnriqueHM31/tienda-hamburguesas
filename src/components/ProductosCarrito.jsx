function ProductoCarrito({ carrito, handleClickAgregarCantidad, handleClickQuitarCantidad }) {
	const productosCarrito = carrito.carrito
	return productosCarrito.map(({ id, nombre, precio, descripcion, cantidad }) => {
		return (
			<article className="producto-elegido" key={id}>
				<img src={`/src/assets/img/menu/menu${id}.webp`} alt={nombre} />
				<div className="contenido-producto-elegido">
					<div className="contenedor-contenido-producto-elegido">
						<h2 className="nombre-producto-elegido">{nombre}</h2>
						<span>${precio}</span>
					</div>

					<p className="precio-producto-elegido">{descripcion}</p>
				</div>

				<div className="cantidad-producto">
					<span>{cantidad}</span>
					<div className="contenedor-btn-cantidad">
						<button onClick={() => handleClickAgregarCantidad(id)} className="btn-agregar">
							<img src="./src/assets/img/ic_agregar.webp" alt="icono para agregar" />
						</button>
						<button onClick={() => handleClickQuitarCantidad(id)} className="btn-quitar">
							<img src="./src/assets/img/ic_quitar.webp" alt="icono para quitar" />
						</button>
					</div>
				</div>
			</article>
		)
	})
}

function SinProductos() {
	return <p className="sin-productos">No tienes productos en tu carrito</p>
}

export default function ProductosCarrito(carrito, handleClickAgregarCantidad, handleClickQuitarCantidad) {
	return carrito.length !== 0 ? <ProductoCarrito carrito={carrito} handleClickAgregarCantidad={handleClickAgregarCantidad} handleClickQuitarCantidad={handleClickQuitarCantidad} /> : <SinProductos />
}
