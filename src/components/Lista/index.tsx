export default function Lista(){
    return(
    <>
    <div className = 'contenedor-tareas'>
        <ul className = "lista-tareas">
            <li className = "lista-item">
            <input type = "checkbox" className = "checkbox-tarea"/>
            <span className = "texto-tarea">Tarea N</span>
            <button className = "boton-borrar-tarea">🗑️</button>
            </li>
            <li className = "lista-item">
            <input type = "checkbox" className = "checkbox-tarea"/>
            <span className = "texto-tarea">Tarea N-1</span>
            <button className = "boton-borrar-tarea">🗑️</button>
            </li>
            <li className = 'lista-item'>
            <input type = "checkbox" className = "checkbox-tarea" />
            <span id = "tarea-completada" className = "texto-tarea">Tarea Completada 2</span>
            <button className = "boton-borrar-tarea">🗑️</button>
            </li>
            <li className = "lista-item">
            <input type = "checkbox" className = "checkbox-tarea"/>
            <span className = "texto-tarea">Tarea K</span>
            <button className = "boton-borrar-tarea">🗑️</button>
            </li>
            <li className = "lista-item">
            <input type = "checkbox" className = "checkbox-tarea"/>
            <span className = "texto-tarea">Tarea 2</span>
            <button className = "boton-borrar-tarea">🗑️</button>
            </li>
            <li className = 'lista-item'>
            <input type = "checkbox" className = "checkbox-tarea" />
            <span id = "tarea-completada" className = "texto-tarea">Tarea Completada 1</span>
            <button className = "boton-borrar-tarea">🗑️</button>
            </li>
        </ul>
    </div>
    </>
    )
}
