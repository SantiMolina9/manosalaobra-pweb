
interface Tarea {
    id: string;
    title: string; 
    completada: boolean;
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
