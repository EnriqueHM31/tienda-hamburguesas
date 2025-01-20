export default function PagoTotal({ total }) {
	return (
		<div className=" pago-total">
			<div className="contenido-pago">
				<h2>Total:</h2>
				<span>${total}</span>
			</div>

			<button>Pagar</button>
		</div>
	)
}
