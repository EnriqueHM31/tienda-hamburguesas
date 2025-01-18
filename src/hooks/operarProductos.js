import { useState } from 'react'

export default function operarProductos() {
	const cantidad = localStorage.getItem('productos') === null ? 0 : getTotalCantidad(JSON.parse(localStorage.getItem('productos')))
	const [cantidadProductos, setCantidadProductos] = useState(cantidad)

	const handleClickCantidadProductos = (id) => {
		let productos = JSON.parse(localStorage.getItem('productos')) || []

		const index = productos.findIndex((producto) => producto.id === id)
		if (index === -1) {
			productos.push({ id, cantidad: 1 })
		} else {
			productos[index].cantidad++
		}

		localStorage.setItem('productos', JSON.stringify(productos))
		setCantidadProductos(getTotalCantidad(productos))
	}

	return { cantidadProductos, handleClickCantidadProductos }
}

const getTotalCantidad = (productos) => {
	return productos.reduce((acum, producto) => acum + producto.cantidad, 0)
}
