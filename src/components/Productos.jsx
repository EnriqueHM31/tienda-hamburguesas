import { productos } from '../mook/productos'
import IconoInformacionProducto from '../components/icon/Icono-información'
export default function Productos() {
	return (
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
									<button className="btn-detalles">
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
	)
}
