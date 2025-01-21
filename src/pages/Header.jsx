import { DESCRIPCION_TIENDA } from '../utils/constantes.js'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider.jsx'

export default function Header() {
	return (
		<header id="inicio" className="header-component">
			<div className="contenedor-header">
				<Slider />

				<div className="contenido-header">
					<h1>Tienda Hamburguesa Mega</h1>

					<p>{DESCRIPCION_TIENDA}</p>

					<Link className="btn-header" to="/productos">
						Comprar
					</Link>
				</div>
			</div>
		</header>
	)
}
