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
						<img className="img-icono-nav " src="../src/assets/images/car.svg" alt="Icono del carrito de compras" />
					</a>
					<a href="https://github.com/EnriqueHM31/" target="_blank" rel="noreferrer">
						<img className="img-icono-nav " src="../src/assets/images/GitHub_Enrique.svg" alt="Icono del Git Hub de Luis Enrique" />
					</a>
				</div>
			</div>
		</nav>
	)
}
