import { useState } from 'react'
import { eliminarProductoCarrito, getTotal, getTotalCantidad } from '../utils/funciones'

export default function useOperarProductos() {
	const productos = localStorage.getItem('productos') === null ? [] : JSON.parse(localStorage.getItem('productos'))

	const [cantidadProductos, setCantidadProductos] = useState(getTotalCantidad(productos))
	const [carrito, setCarrito] = useState(productos)
	const [total, setTotal] = useState(getTotal(productos))

	const handleClickCantidadProductos = (item) => {
		const { id, precio, nombre, descripcion } = item

		let productos = JSON.parse(localStorage.getItem('productos')) || []

		const index = productos.findIndex((producto) => producto.id === id)
		if (index === -1) {
			productos.push({ id, precio, nombre, descripcion, cantidad: 1 })
		} else {
			productos[index].cantidad++
		}

		actualizar(productos)
	}

	const handleClickAgregarCantidad = (id) => {
		const index = carrito.findIndex((producto) => producto.id === id)

		const newCarrito = [...carrito]

		newCarrito[index].cantidad++

		actualizar(newCarrito)
	}

	const handleClickQuitarCantidad = (id) => {
		const index = carrito.findIndex((producto) => producto.id === id)

		const newCarrito = [...carrito]

		if (newCarrito[index].cantidad === 1) {
			const productos = eliminarProductoCarrito(id)
			actualizar(productos)
			return
		}

		newCarrito[index].cantidad--
		actualizar(newCarrito)
	}

	const actualizar = (productos) => {
		localStorage.setItem('productos', JSON.stringify(productos))
		setCarrito(productos)
		setCantidadProductos(getTotalCantidad(productos))
		setTotal(getTotal(productos))
	}

	return { cantidadProductos, handleClickCantidadProductos, carrito, handleClickAgregarCantidad, handleClickQuitarCantidad, total }
}
