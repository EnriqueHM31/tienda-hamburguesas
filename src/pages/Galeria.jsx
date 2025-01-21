import { GALERIA } from '../utils/constantes.js'

export default function Galeria() {
	return (
		<section id="galeria" className="galeria">
			<h2>Nuestra Galeria</h2>
			<div className="galeria-img">
				{GALERIA.map(({ id, url, alt }) => {
					return <ImageGrid id={id} url={url} alt={alt} key={id} />
				})}

				<img className="logo-grid" src="./src/assets/img/logo.svg" alt="Logo de la tienda de la hamburguesas" />
			</div>
		</section>
	)
}

export function ImageGrid({ id, url, alt }) {
	return (
		<div className={`galeria-img-item galeria-${id}`} key={id}>
			<img src={url} alt={alt} />
		</div>
	)
}
