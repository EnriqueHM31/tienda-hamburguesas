import { UBICACION as DescripcionUbicacion } from '../utils/constantes'
import RedesSociales from '../components/RedesSociales'
import FormularioContacto from '../components/FormularioContacto'

export default function Contacto() {
	return (
		<section className="seccion-contacto">
			<article className="contenido-contacto">
				<div className="ubicacion">
					<h2>Ubicacion</h2>
					<p>{DescripcionUbicacion}</p>
				</div>

				<RedesSociales />
			</article>

			<FormularioContacto />
		</section>
	)
}
