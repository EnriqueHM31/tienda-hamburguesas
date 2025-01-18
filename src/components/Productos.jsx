import IconoInformacionProducto from '../components/icon/Icono-información'
import DetallesProducto from './DetallesProducto.jsx'
import useProducto from '../hooks/producto'

export default function Productos() {
	const { productos, detalles, handleClick, handleClickRemove } = useProducto()

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
				{detalles && <DetallesProducto detalles={detalles} handleClick={handleClickRemove} />}
			</ul>
		</>
	)
}
