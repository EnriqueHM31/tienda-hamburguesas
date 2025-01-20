import IconoInformacionProducto from '../components/icon/Icono-información'

export default function Productos({ productos, categorias, handleClick, handleClickAgregar, handleClickCategoria }) {
	return (
		<div className="page page-productos">
			<div className="seccion-categorias">
				<h2>Categorias</h2>
				<div className="btn-categorias">
					{categorias.map(({ id, nombre, check }) => {
						return (
							<button key={id} onClick={() => handleClickCategoria(id)} style={{ borderBottom: check ? '.3rem solid var(--rojo)' : 'none' }}>
								{nombre}
							</button>
						)
					})}
				</div>
			</div>
			<ul id="productos" className="lista-productos">
				{productos.map(({ id, nombre, precio, descripcion }) => {
					const data = {
						id,
						nombre,
						precio,
						descripcion,
					}
					return (
						<li key={id} className="item-producto">
							<article className="producto">
								<img loading="lazy" className="imagen-producto" src={`./src/assets/img/menu/menu${id}.webp`} alt={nombre} />
								<div className="contenido-producto">
									<p className="nombre-producto">{nombre}</p>
									<div className="detalles-productos">
										<span className="precio-producto">${precio}</span>
										<button onClick={() => handleClick(id)} className="btn-detalles">
											<IconoInformacionProducto />
										</button>
									</div>
								</div>
								<button onClick={() => handleClickAgregar(data)} className="btn-header btn-agregar">
									Agregar
								</button>
							</article>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
