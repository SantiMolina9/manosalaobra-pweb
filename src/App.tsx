import './App.css'
import Encabezado from './components/Encabezado'
import ContenedorInput from './components/ContenedorInput'
import ContenedorTareas from './components/ContenedorTareas'
import { useState } from 'react';

interface Tarea {
  id: string;
  title: string;
  completada: boolean;
}
function App() {

  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregarTarea = (title: string) => {
    const nuevaTarea: Tarea = {
      id: crypto.randomUUID(), //Use este metodo para hacerlo mas interesante
      title,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const completarTarea = (id: string) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const borrarTarea = (id: string) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };
  
  return (
    <>
    <Encabezado/>
<<<<<<< Updated upstream
    <ContenedorInput/>
    <Lista/>
    </>
=======
    <ContenedorInput onAddTodo = {agregarTarea}/>
    <ContenedorTareas
    tareas = {tareas}
    onCompletarTarea = {completarTarea}
    onBorrarTarea = {borrarTarea}/>
    </div>
>>>>>>> Stashed changes
  )
}

export default App
