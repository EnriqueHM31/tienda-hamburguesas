export default function Categorias({ categorias, handleClickCategoria }) {
	return (
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
	)
}
