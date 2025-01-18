import { useState } from 'react'
import { IMAGENES_SLIDER } from '../utils/constantes.js'

export default function Slider() {
	const [imagenes, setImagenes] = useState(IMAGENES_SLIDER)

	const handleClick = (id) => {
		imagenes.map((img) => (img.check = false))
		const images = imagenes.map((image) => ({ ...image, check: image.id === id }))
		setImagenes(images)
		console.log(images)
	}

	return (
		<div className="contenedor-imagenes">
			<div className="contenido-imagenes">
				{imagenes.map(({ id, url, alt, precio, check }) => {
					const newvisibility = check ? 'block' : 'none'
					return (
						<div key={id} style={{ display: newvisibility }} className="contenedor-imagen-publicidad">
							<img className="marco-publicidad" src="../src/assets/img/slider/circle.png" alt="Circle" />

							<img className="img-publicidad" src={url} alt={alt} />
							<div className="etiqueta-precio">
								<p>${precio}</p>
							</div>
						</div>
					)
				})}
			</div>
			<div className="contenedor-btn-slider">
				{imagenes.map(({ id, check }, index) => {
					const newColor = check ? '#FF0000' : '#FFFFFF'

					return <button key={index} style={{ backgroundColor: newColor }} className="btn-slider" onClick={() => handleClick(id)}></button>
				})}
			</div>
		</div>
	)
}
