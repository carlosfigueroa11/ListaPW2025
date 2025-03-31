const listaTareas = document.getElementById('listaTareas');
const tareaInput = document.getElementById('tareaInput');


function agregarTarea()
{
    const tareaTexto = tareaInput.value.trim();
    const tarea = {
        id: Date.now(),
        texto: tareaTexto
    };

    const tareaItem = document.createElement('li');
    tareaItem.className = "tarea-item";
    tareaItem.id = tarea.id;

    const tareaSpan = document.createElement('span');
    tareaSpan.textContent = tarea.texto;

    tareaItem.appendChild(tareaSpan);

    listaTareas.appendChild(tareaItem)
    guardarTareas();
}

function guardarTareas(){
    const tareas = [];
    console.log(document.querySelectorAll('.tarea-item')[0]);

    document.querySelectorAll('.tarea-item').forEach(
        
        item => {
            console.log(item);
            const tarea = {
                id: item.id,
                texto: item.querySelector('span').textContent
            };
            tareas.push(tarea);
        }
    );
    localStorage.setItem('tareas',JSON.stringify(tareas));
    console.log(localStorage)

}


document.addEventListener('DOMContentLoaded',cargarTareas);


function cargarTareas(){
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.forEach(
        tarea => {
            const tareaItem = document.createElement('li');
            tareaItem.className = "tarea-item";
            const tareaSpan = document.createElement('span');
            tareaSpan.textContent = tarea.texto;
            tareaItem.appendChild(tareaSpan);
            listaTareas.appendChild(tareaItem);
        }

 function eliminarTarea(){
     const tareas =JSON.parse(localStorage.getItem('tareas')) || [];

        }
    )
}


