+function () {
    // Traer los elementos que se necesitan del HTML
   var addBoton = document.getElementById('agregar');
   var showBoton = document.getElementById('mostrar');
   var searchBoton = document.getElementById('buscar');
   var topTechBoton = document.getElementById('top-tecnico');
   var topHSEBoton = document.getElementById('top-hse');
   var result = document.getElementById('contenedor-estudiantes');
    
    // Evento Click - Agregar
    var eventoAgregar = function (e) {
        e.preventDefault();
        var estudiante = agregarEstudiante();
        resultado.innerHTML = mostrar(estudiante);
    };
    
    var eventoMostrar = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        resultado.innerHTML = mostrarLista(estudiantes);
    };
        
    var eventoBuscar = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var nombreEstudiante = prompt("¿Qué nombre desea buscar?");
        var estudianteBuscado = buscar(nombreEstudiante, estudiantes);
        resultado.innerHTML = mostrarLista(estudianteBuscado);
    };
    
    var eventoTopTecnico = function (e) {
        e.preventDefault();
        console.log('hola');
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopTecnico = topTecnico(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesTopTecnico);
    };
    

    
    
    var eventoTopHSE = function (e) {
        e.preventDefault();
        console.log('Adios');
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopHSE = topHSE(estudiantes);
        resultado.innerHTML = mostrarLista(estudiantesTopHSE);
    };

    
    
    // Agregar eventos que correspondan
    addBoton.addEventListener('click', eventoAgregar);
    showBoton.addEventListener('click', eventoMostrar);
    searchBoton.addEventListener('click', eventoBuscar);
    topHSEBoton.addEventListener('click', eventoTopHSE);
    topTechBoton.addEventListener('click', eventoTopTecnico);
    
}();