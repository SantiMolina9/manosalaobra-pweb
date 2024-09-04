<<<<<<< Updated upstream
function ContenedorInput(){
    return(
        <>
        <div className = 'contenedor-input'>
        <input type = 'text' id = 'input' className= 'input' placeholder = 'Ingrese una tarea'></input>
        <button className = 'boton'>ADD</button>
=======
import InputBoton from '../InputBoton'

interface Props{
    onAddTodo: (title: string) => void
}

const ContenedorInput: React.FC<Props> = ({onAddTodo}) => {
    return(
        <>
        <div className = 'contenedor-input'>
            <InputBoton guardarTodo={onAddTodo}/>
>>>>>>> Stashed changes
        </div>
        </>
    )
}
export default ContenedorInput