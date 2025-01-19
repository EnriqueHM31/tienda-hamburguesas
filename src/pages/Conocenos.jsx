import { SOBRE_NOSOTROS } from '../utils/constantes'

export default function Conocenos() {
	return (
		<section id="seccion-conocenos" className="seccion-conocenos">
			<div className="imagen-conocenos">
				<img src="./src/assets/img/conocenos.webp" alt="Imagen de la tienda Hamburguesa Mega" />
			</div>
			<div className="contenido-conocenos">
				<h2>Sobre nosotros</h2>
				<p>{SOBRE_NOSOTROS}</p>
			</div>
		</section>
	)
}
