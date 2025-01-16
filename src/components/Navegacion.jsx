import IconoGitHub from './icon/GitHub_Enrique.jsx'
import Carrito from './icon/Icono-carrito.jsx'
import { LINKS_NAVS } from '../utils/constantes.js'

export default function Navegacion() {
	return (
		<nav className="nav-app">
			<div className="container">
				<img className="img-logo" src="../src/assets/images/logo.svg" alt="Logo de la tienda de la hamburguesas" />
				<ul className="menu-nav">
					{LINKS_NAVS.map((link, index) => (
						<li className="item-nav" key={index}>
							<a className="link-nav" href={link.url}>
								{link.texto}
							</a>
						</li>
					))}
				</ul>
				<div className="iconos-nav">
					<a href="/">
						<Carrito className="img-icono-nav " />
					</a>
					<a href="https://github.com/EnriqueHM31/" target="_blank" rel="noreferrer">
						<IconoGitHub className="img-icono-nav " />
					</a>
				</div>
			</div>
		</nav>
	)
}
