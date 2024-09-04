<<<<<<< Updated upstream
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
=======
interface Tarea {
    id: string;
    title: string; 
    completada: boolean;
>>>>>>> Stashed changes
}

interface ListaProps {
    tareas: Tarea[]; //Hago un array del tipo Tarea
    onCompletarTarea: (id: string) => void;
    onBorrarTarea: (id: string) => void;
}

const Lista: React.FC<ListaProps> = ({ tareas, onCompletarTarea, onBorrarTarea }) => {
    return (
    <ul className="lista-tareas">
        {tareas.length === 0 ?
            <p style={{
                display: 'flex',
                width: '100%',
                fontSize: '28px',
                color: 'black',
                justifyContent: 'center',   
                alignItems: 'center',
                border: 'solid 1.5px black'
            }}>No hay tareas</p>
            :
            tareas.map((tarea) => ( //Mapeo cada una de las tareas
            <li key={tarea.id} className="lista-item">
                <input
                type = "checkbox"
                className = "checkbox-tarea"
                checked = {tarea.completada}
                onChange = {() => onCompletarTarea(tarea.id)}
                />
                <span className={tarea.completada ? 'tarea-completada' : 'texto-tarea'}>
                    {tarea.title} 
                </span>
                <button className="boton-borrar-tarea" onClick={() => onBorrarTarea(tarea.id)}>
                🗑️
                </button>
            </li>
            )).reverse() //Invierto la muestra de las tareas 
            }
    </ul>
    );
};

export default Lista;
