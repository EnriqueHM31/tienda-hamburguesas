export default function FormularioContacto() {
	return (
		<form className="formulario">
			<h2>Formulario de contacto</h2>

			<div className="contenido-formulario">
				<input name="Nombre" pattern="[A-Za-z ]+" type="text" placeholder="Nombre" required />
				<input name="Email" autoComplete="off" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.(com)$" type="email" placeholder="Email" required />
				<textarea name="Mensaje" pattern="[A-Za-z0-9 ]+" placeholder="Mensaje" required></textarea>
				<button>Enviar</button>
			</div>
			<img src="/src/assets/img/logo.svg" alt="logo" className="logo-contacto" />
		</form>
	)
}
