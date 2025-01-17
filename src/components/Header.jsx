import { DESCRIPCION_TIENDA } from '../utils/constantes.js'
import Slider from './Slider.jsx'

export default function Header() {
	return (
		<header id="inicio" className="header-component">
			<div className="contenedor-header">
				<Slider />

				<div className="contenido-header">
					<h1>Tienda Hamburguesa Mega</h1>

					<p>{DESCRIPCION_TIENDA}</p>

					<a className="btn-header" href="/">
						Comprar
					</a>
				</div>
			</div>
		</header>
	)
}
