const BURBUJAS = []

for (let i = 0; i < 6; i++) {
	const burbuja = document.createElement('div')
	BURBUJAS.push(burbuja)
}

function crearBurbujas() {
	BURBUJAS.map((burbuja) => {
		burbuja.classList.add('burbuja')
		burbuja.style.top = Math.random() * window.innerHeight + 'px'
		burbuja.style.left = Math.random() * window.innerWidth + 'px'
		document.body.appendChild(burbuja)
	})
}

crearBurbujas()
