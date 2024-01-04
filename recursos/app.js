function mostrarContenido(seccion) {
    // Oculta todos los contenidos y la foto
    var secciones = ['contenido', 'datosPersonales', 'formacionAcademica', 'formacionComplementaria', 'experienciaLaboral', 'datosInteres', 'gitHup'];
    for (var i = 0; i < secciones.length; i++) {
        var elemento = document.getElementById(secciones[i]);
        if (elemento) {
            elemento.style.display = 'none';
        }
		var mobileNav = document.getElementById('mobileNav');
    mobileNav.style.display = 'none';
    }

    // Oculta la foto en todas las secciones
    document.getElementById('fotoContainer').style.opacity = '0';

    // Muestra el contenido de la sección seleccionada
    var contenido = document.getElementById(seccion);
    if (contenido) {
        contenido.style.display = 'block';

        // Si la sección es 'datosPersonales', activa la transición de la foto
        if (seccion === 'datosPersonales') {
            setTimeout(function () {
                document.getElementById('fotoContainer').style.opacity = '1';
            }, 100); // Ajusta el tiempo según sea necesario
        }
    }
}

// Mostrar el mensaje de bienvenida al cargar la página
mostrarContenido('contenido');

// Agregar evento de carga para la imagen
document.getElementById('fotoContainer').addEventListener('load', function () {
    // Transición de la imagen al cargarse
    document.getElementById('fotoContainer').style.opacity = '1';
});

// Función para mostrar/ocultar el menú desplegable
function toggleMobileMenu() {
    var mobileNav = document.getElementById('mobileNav');
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');

    if (window.getComputedStyle(mobileNav).display === 'none') {
        // Obtener la posición del botón del menú
        var rect = mobileMenuBtn.getBoundingClientRect();

        // Establecer la posición del menú justo debajo del botón
        mobileNav.style.position = 'fixed';
        mobileNav.style.left = '50%';
        mobileNav.style.transform = 'translateX(-50%)';
        mobileNav.style.top = rect.bottom + 'px';
        mobileNav.style.display = 'block';

        // Actualizar la posición del menú al hacer scroll
        window.addEventListener('scroll', function () {
            var rect = mobileMenuBtn.getBoundingClientRect();
            mobileNav.style.left = '50%';
            mobileNav.style.transform = 'translateX(-50%)';
            mobileNav.style.top = rect.bottom + 'px';
        });
    } else {
        mobileNav.style.display = 'none';
    }
}

// Actualizar la posición del menú al hacer scroll
window.addEventListener('scroll', function () {
    var mobileNav = document.getElementById('mobileNav');
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');

    if (window.getComputedStyle(mobileNav).display !== 'none') {
        // Obtener la posición actualizada del botón del menú
        var rect = mobileMenuBtn.getBoundingClientRect();

        // Establecer la posición del menú justo debajo del botón
        mobileNav.style.left = rect.left + 'px';
        mobileNav.style.top = rect.bottom + 'px';
    }
});

// Agregar evento para cerrar el menú al hacer clic en cualquier lugar fuera del menú
document.addEventListener('click', function (event) {
    var mobileNav = document.getElementById('mobileNav');
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (!mobileNav.contains(event.target) && event.target !== mobileMenuBtn) {
        mobileNav.style.display = 'none';
    }
});
