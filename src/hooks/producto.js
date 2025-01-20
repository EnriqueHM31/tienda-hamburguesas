import { useState } from 'react'
import { productos as Menu } from '../mook/productos'
import { CATEGORIAS } from '../utils/constantes'

export default function useProducto() {
	const [productos, setProductos] = useState(Menu)
	const [categorias, setCategorias] = useState(CATEGORIAS)

	const handleClickCategoria = (id) => {
		// Resetear el estado de 'check' de todas las categorías
		categorias.forEach((item) => (item.check = false))

		// Establecer 'check' en true para el id seleccionado
		const updatedCategorias = categorias.map((item) => (item.id === id ? { ...item, check: true } : item))

		// Filtrar los productos según la categoría seleccionada
		const categoriaSeleccionada = updatedCategorias.find((item) => item.id === id)
		const filteredProductos =
			categoriaSeleccionada?.nombre === 'Todo'
				? Menu // Si la categoría seleccionada es 'Todos', mostrar todos los productos
				: Menu.filter((item) => item.categoria === categoriaSeleccionada?.nombre)

		console.log(filteredProductos)
		// Actualizar el estado de productos y las categorías
		setCategorias(updatedCategorias)
		setProductos(filteredProductos)
	}

	return { productos, categorias, handleClickCategoria }
}
