import Facebook from '../components/icon/Facebook'
import Instagram from '../components/icon/Instagram'
import TikTok from '../components/icon/TikTok'

export default function Contacto() {
	return (
		<section className="seccion-contacto">
			<div className="contenido-contacto">
				<div className="ubicacion">
					<h2>Ubicacion</h2>
					<p>
						La tienda de hamburguesas está ubicada en el centro de la ciudad, en la calle principal, a unos metros de la plaza central. Se encuentra cerca de una estación de
						metro y varias paradas de autobús, lo que la hace de fácil acceso para quienes se desplazan en transporte público. Además, está rodeada de tiendas de moda y cafés, en
						una zona muy transitada y popular entre locales y turistas.
					</p>
				</div>

				<div className="siguenos">
					<h2>Siguenos</h2>
					<div className="redes-sociales">
						<a href="/contacto">
							<Facebook />
						</a>

						<a href="/contacto">
							<Instagram />
						</a>

						<a href="/contacto">
							<TikTok />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
