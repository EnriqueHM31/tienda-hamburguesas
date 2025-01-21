import Facebook from '../components/icon/Facebook'
import Instagram from '../components/icon/Instagram'
import TikTok from '../components/icon/TikTok'

export default function RedesSociales() {
	return (
		<div className="siguenos">
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
	)
}
