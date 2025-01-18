import { useState } from 'react'

export default function useProductoInfo({ productos }) {
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

	return { detalles, handleClick, handleClickRemove }
}
