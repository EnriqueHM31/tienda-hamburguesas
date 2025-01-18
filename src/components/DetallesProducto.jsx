export default function DetallesProducto({ detalles, handleClickRemove }) {
	const data = detalles // detalles ya es el objeto con la información

	return (
		<div className="overlay">
			<article className="contenedor-detalles">
				<h2>Información del producto</h2>
				<div className="contenedor-informacion-detalles">
					<div className="img-detalle">
						<img src={`/src/assets/img/menu${data.id}.webp`} alt={data.nombre} />
					</div>

					<div className="contenido-detalles">
						<h3>Producto: {data.nombre}</h3>
						<p className="precio">Precio: ${data.precio}</p>
						<p className="descripcion">{data.descripcion}</p>

						<ul className="lista-ingredientes">
							{data.ingredientes.map((ingrediente, index) => {
								return <li key={index}>{ingrediente}</li>
							})}
						</ul>
					</div>
				</div>
				<button onClick={handleClickRemove} className="btn-cerrar">
					<img src="/src/assets/img/close.svg" alt="icono para cerrar el modal de los detalles" />
				</button>
			</article>
		</div>
	)
}
