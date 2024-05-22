function mostrarContenido(seccion) {
    // Oculta todos los contenidos y la foto
    var secciones = ['contenido', 'datosPersonales', 'formacionAcademica', 'formacionProgramacion' ,'formacionComplementaria', 'experienciaLaboral', 'datosInteres', 'gitHup'];
    for (var i = 0; i < secciones.length; i++) {
        var elemento = document.getElementById(secciones[i]);
        if (elemento) {
            elemento.style.display = 'none';
        }
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

// JavaScript para gestionar el cambio en el menú desplegable
document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');

    function mostrarContenido(seccion) {
        // Oculta todos los contenidos
        sections.forEach(function (element) {
            element.style.display = 'none';
        });

        // Muestra el contenido de la sección seleccionada
        var contenido = document.querySelector(seccion);
        if (contenido) {
            contenido.style.display = 'block';
        }
    }

    // Mostrar el mensaje de bienvenida al cargar la página
    mostrarContenido('#contenido');
});