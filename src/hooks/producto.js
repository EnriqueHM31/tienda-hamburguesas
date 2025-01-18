import { useState } from 'react'
import { productos as Menu } from '../mook/productos'

export default function useProducto() {
	const [productos] = useState(Menu)
	const [detalles, setDetalles] = useState(null)

	const handleClick = (id) => {
		// Aquí buscas el producto por id y lo guardas en detalles
		const producto = productos.find((producto) => producto.id === id)
		setDetalles(producto) // Muestra los detalles del producto seleccionado
	}

	const handleClickRemove = () => {
		// Aquí puedes vaciar el estado de detalles cuando se elimine o se cierre
		setDetalles(null) // Elimina los detalles del producto
	}

	return { productos, detalles, handleClick, handleClickRemove }
}
