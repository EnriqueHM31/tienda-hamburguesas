import { useState } from 'react'
import { productos as Menu } from '../mook/productos'

export default function useProducto() {
	const [productos] = useState(Menu)

	return { productos }
}
