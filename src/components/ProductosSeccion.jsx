import IconoInformacionProducto from '../components/icon/Icono-información'

export default function ProductosSeccion({ productos, handleClick, handleClickAgregar }) {
	return productos.map(({ id, nombre, precio, descripcion }) => {
		const data = {
			id,
			nombre,
			precio,
			descripcion,
		}
		return <ProductoSeccion key={id} id={id} nombre={nombre} precio={precio} handleClick={handleClick} handleClickAgregar={handleClickAgregar} data={data} />
	})
}

export function ProductoSeccion({ id, nombre, precio, handleClick, handleClickAgregar, data }) {
	return (
		<li className="item-producto">
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
}
