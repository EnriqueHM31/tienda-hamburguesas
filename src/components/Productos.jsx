import { productos as Menu } from '../mook/productos'
import IconoInformacionProducto from '../components/icon/Icono-información'
import DetallesProducto from './DetallesProducto.jsx'
import { useState } from 'react'

export default function Productos() {
	const [detalles, setDetalles] = useState(null)
	const [productos] = useState(Menu)

	const handleClick = (id) => {
		const detalles = productos.find((producto) => producto.id === id)
		setDetalles(detalles)
	}

	const handleClickRemove = () => {
		console.log('se ha eliminado el producto')
		setDetalles(null)
	}
	return (
		<>
			<ul id="productos" className="lista-productos">
				{productos.map(({ id, nombre, precio }) => {
					return (
						<li key={id} className="item-producto">
							<article className="producto">
								<img loading="lazy" className="imagen-producto" src={`./src/assets/img/menu${id}.webp`} alt={nombre} />
								<div className="contenido-producto">
									<p className="nombre-producto">{nombre}</p>
									<div className="detalles-productos">
										<span className="precio-producto">${precio}</span>
										<button onClick={() => handleClick(id)} className="btn-detalles">
											<IconoInformacionProducto />
										</button>
									</div>
								</div>
								<button className="btn-header btn-agregar">Agregar</button>
							</article>
						</li>
					)
				})}
			</ul>
			{detalles !== null ? <DetallesProducto detalles={detalles} handleClickRemove={handleClickRemove} /> : null}
		</>
	)
}
