import Categorias from '../components/Categorias'
import ProductosSeccion from '../components/ProductosSeccion'

export default function Productos({ productos, categorias, handleClick, handleClickAgregar, handleClickCategoria }) {
	return (
		<div className="page page-productos">
			<Categorias categorias={categorias} handleClickCategoria={handleClickCategoria} />
			<ul id="productos" className="lista-productos">
				<ProductosSeccion productos={productos} handleClick={handleClick} handleClickAgregar={handleClickAgregar} />
			</ul>
		</div>
	)
}
