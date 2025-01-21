import Facebook from '../components/icon/Facebook'
import Instagram from '../components/icon/Instagram'
import TikTok from '../components/icon/TikTok'

export default function Contacto() {
	return (
		<section className="seccion-contacto">
			<article className="contenido-contacto">
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
					<ul className="redes-sociales">
						<a href="/contacto">
							<Facebook />
						</a>

						<a href="/contacto">
							<Instagram />
						</a>

						<a href="/contacto">
							<TikTok />
						</a>
					</ul>
				</div>
			</article>

			<form className="formulario">
				<h2>Formulario de contacto</h2>

				<div className="contenido-formulario">
					<input type="text" placeholder="Nombre" required />
					<input type="text" placeholder="Email" required />
					<textarea placeholder="Mensaje" required></textarea>
					<button>Enviar</button>
				</div>
				<img src="/src/assets/img/logo.svg" alt="logo" className="logo-contacto" />
			</form>
		</section>
	)
}
