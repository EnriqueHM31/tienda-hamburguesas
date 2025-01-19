import { LINKS_NAVS } from '../utils/constantes.js'
import Carrito from './icon/Icono-carrito.jsx'
import IconoGitHub from './icon/GitHub_Enrique.jsx'
import { Link } from 'react-router-dom'
import IconoMenu from './icon/icono-menu.jsx'
import IconoClose from './icon/icono-close.jsx'
import { useState } from 'react'

export default function Navegacion({ cantidadProductos }) {
	const [menu, setMenu] = useState(false)

	const handleClickMenu = () => {
		setMenu(!menu)
	}
	return (
		<nav className="nav-app">
			<div className="container">
				<img className="img-logo" src="../src/assets/img/logo.svg" alt="Logo de la tienda de la hamburguesas" />
				{
					<ul className={`menu-nav ${menu ? 'open' : 'close'}`}>
						{LINKS_NAVS.map((link, index) => (
							<li className="item-nav" key={index}>
								<Link className="link-nav" to={link.url}>
									{link.texto}
								</Link>
							</li>
						))}
					</ul>
				}

				<div className="iconos-nav">
					<Link to="/carrito">
						<span className="cantidad-productos">{cantidadProductos}</span>
						<Carrito className="img-icono-nav " />
					</Link>
					<a href="https://github.com/EnriqueHM31/" target="_blank" rel="noreferrer">
						<IconoGitHub className="img-icono-nav " />
					</a>
					<button onClick={handleClickMenu} className="icono-menu">
						{menu ? <IconoClose /> : <IconoMenu />}
					</button>
				</div>
			</div>
		</nav>
	)
}
