import { GALERIA } from '../utils/constantes.js'

export default function Galeria() {
	return (
		<section id="galeria" className="galeria">
			<div className="galeria-img">
				{GALERIA.map(({ id, url, alt }) => {
					return (
						<div className={`galeria-img-item galeria-${id}`} key={id}>
							<img src={url} alt={alt} />
						</div>
					)
				})}

				<img className="logo-grid" src="./src/assets/img/logo.svg" alt="Logo de la tienda de la hamburguesas" />
			</div>
		</section>
	)
}
