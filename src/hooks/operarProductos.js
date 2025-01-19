import { useState } from 'react'

export default function operarProductos() {
	const cantidad = localStorage.getItem('productos') === null ? 0 : getTotalCantidad(JSON.parse(localStorage.getItem('productos')))
	const [cantidadProductos, setCantidadProductos] = useState(cantidad)
	const productos = localStorage.getItem('productos') === null ? [] : JSON.parse(localStorage.getItem('productos'))
	const [carrito, setCarrito] = useState(productos)
	const [total, setTotal] = useState(getTotal(productos))

	const handleClickCantidadProductos = (item) => {
		const { id, precio, nombre, descripcion } = item

		let productos = JSON.parse(localStorage.getItem('productos')) || []

		console.log(productos.item)

		const index = productos.findIndex((producto) => producto.id === id)
		if (index === -1) {
			productos.push({ id, precio, nombre, descripcion, cantidad: 1 })
		} else {
			productos[index].cantidad++
		}

		localStorage.setItem('productos', JSON.stringify(productos))
		setCarrito(productos)
		setCantidadProductos(getTotalCantidad(productos))
		setTotal(getTotal(productos))
	}

	const handleClickAgregarCantdad = (id) => {
		const index = carrito.findIndex((producto) => producto.id === id)

		// Crear una copia del carrito para evitar mutar el estado directamente
		const newCarrito = [...carrito]

		// Asegurarse de que el producto existe antes de modificar la cantidad
		newCarrito[index].cantidad++

		localStorage.setItem('productos', JSON.stringify(newCarrito))

		// Actualizar el estado
		setCarrito(newCarrito)

		// Actualizar la cantidad total de productos
		setCantidadProductos(getTotalCantidad(newCarrito))
		setTotal(getTotal(newCarrito))
	}

	const handleClickQuitarCantidad = (id) => {
		const index = carrito.findIndex((producto) => producto.id === id)

		// Crear una copia del carrito para evitar mutar el estado directamente
		const newCarrito = [...carrito]

		if (newCarrito[index].cantidad === 1) {
			let productos = JSON.parse(localStorage.getItem('productos')) || []

			// Paso 2: Filtrar el producto que queremos eliminar (por id)
			productos = productos.filter((producto) => producto.id !== id)

			// Paso 3: Guardar de nuevo el array filtrado en localStorage
			localStorage.setItem('productos', JSON.stringify(productos))
			setCarrito(productos)
			setCantidadProductos(getTotalCantidad(productos))
			setTotal(getTotal(productos))
			return
		}

		newCarrito[index].cantidad--
		localStorage.setItem('productos', JSON.stringify(newCarrito))

		// Actualizar el estado
		setCarrito(newCarrito)

		// Actualizar la cantidad total de productos
		setCantidadProductos(getTotalCantidad(newCarrito))
		setTotal(getTotal(newCarrito))
	}

	// Actualizar localStorage

	return { cantidadProductos, handleClickCantidadProductos, carrito, handleClickAgregarCantdad, handleClickQuitarCantidad, total }
}

export const getTotalCantidad = (productos) => {
	return productos.reduce((acum, producto) => acum + producto.cantidad, 0)
}

export const getTotal = (productos) => {
	return productos.reduce((acum, producto) => acum + producto.precio * producto.cantidad, 0)
}
