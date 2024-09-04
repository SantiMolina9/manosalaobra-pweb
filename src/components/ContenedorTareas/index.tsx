import React from 'react';
import Lista from '../Lista'

interface Tarea {
    id: string;
    title: string;
    completada: boolean;
}

interface Props {
    tareas: Tarea[]; //Hago un array de tipo Tarea
    onCompletarTarea: (id: string) => void;
    onBorrarTarea: (id: string) => void;
}
const ContenedorTareas: React.FC<Props> = ({tareas, onCompletarTarea, onBorrarTarea}) =>{
    return (
    <>
        <div className = 'contenedor-tareas'>
        <Lista
        tareas = {tareas}
        onCompletarTarea = {onCompletarTarea}
        onBorrarTarea = {onBorrarTarea}/>
        </div>
    </>
    )
}
export default ContenedorTareas