// array para marcar las tareas con prioridad
let tareasPrioridad = [];

// funcion para mostrar las notificaciones 
function mostrarNotificacion(mensaje, tipo) {

}

// funcion para actualizar el contador de tareas en el navbar
function actualizarContadorTareas() {

}

// funcion para marcar/desmarcar tareas con prioridad
// toggle
function togglePrioridad(tareaId) {

}


// function inicializar los eventos de jquery

function inicializarEventos() {
  $('.btn-prioridad').on('click', function() {
    // obtener el id de la tarea desde el atributo tarea-id que es un atributo personalizado
    const tareaId = $(this).data('tarea-id');
    console.log(tareaId);

    // aplicar efecto visual
    $(this).addClass('clicked');

    setTimeout(() => {
      $(this).removeClass('clicked');
    }, 1000);

    togglePrioridad(tareaId);
  });
}

$(document).ready(function() {
  inicializarEventos();
});