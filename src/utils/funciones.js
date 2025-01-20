export const getTotalCantidad = (productos) => {
	return productos.reduce((acum, producto) => acum + producto.cantidad, 0)
}

export const getTotal = (productos) => {
	return productos.reduce((acum, producto) => acum + producto.precio * producto.cantidad, 0)
}

export const eliminarProductoCarrito = (id) => {
	let productos = JSON.parse(localStorage.getItem('productos')) || []

	return (productos = productos.filter((producto) => producto.id !== id))
}
