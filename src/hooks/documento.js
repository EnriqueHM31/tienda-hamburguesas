import { useEffect } from 'react'

export default function useDocumento({ title }) {
	if (title.split('')[1] === '0') {
		title = 'Tienda Hamburguesa Mega'
	}
	useEffect(() => {
		document.title = title
	}, [title])
}
