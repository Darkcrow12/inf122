function agregarTarea() {
    var nuevaTarea = document.getElementById("nueva-tarea").value;
   
    var nuevaLista = document.createElement("li");
    
    nuevaLista.textContent = nuevaTarea;
    
    document.getElementById("tareas-lista").appendChild(nuevaLista);
   
    document.getElementById("nueva-tarea"). value = "";
}