function agregarTarea() {
    var nuevaTarea = document.getElementById("nueva-tarea").value;

    var nuevaLista = document.createElement("li");

    nuevaLista.textContent = nuevaTarea;

    var listaTareas = document.getElementById("tareas-lista");

    while (listaTareas.firstChild) {
        listaTareas.removeChild(listaTareas.firstChild);
    }

    listaTareas.appendChild(nuevaLista);

    document.getElementById("nueva-tarea").value = "";
}
