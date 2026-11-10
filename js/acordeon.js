// Modo acordeón: cada .titulo pliega/despliega el .contenido que le corresponde
// (solo uno abierto a la vez; al activar, el primero). El botón #modo-acordeon alterna entre texto continuo y acordeón.
(function () {
	var boton = document.getElementById('modo-acordeon');
	var titulos = document.querySelectorAll('.titulo');
	var contenidos = document.querySelectorAll('.contenido');
	if (!boton) return;

	function cerrarTodos() {
		contenidos.forEach(function (c) { c.classList.remove('abierto'); });
	}

	titulos.forEach(function (titulo, i) {
		titulo.addEventListener('click', function () {
			if (!document.body.classList.contains('acordeon')) return;
			var contenido = contenidos[i];
			var estabaAbierto = contenido.classList.contains('abierto');
			cerrarTodos();
			if (!estabaAbierto) contenido.classList.add('abierto');
		});
	});

	boton.addEventListener('click', function () {
		var activo = document.body.classList.toggle('acordeon');
		cerrarTodos();
		if (activo && contenidos[0]) contenidos[0].classList.add('abierto'); // como Fx.Accordion: la primera abierta
		boton.textContent = activo ? 'Ver texto continuo' : 'Ver texto en modo acordeón';
	});
})();
