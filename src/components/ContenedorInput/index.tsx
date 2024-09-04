import InputBoton from '../InputBoton'

interface Props{
    onAddTodo: (title: string) => void
}

const ContenedorInput: React.FC<Props> = ({onAddTodo}) => {
    return(
        <>
        <div className = 'contenedor-input'>
            <InputBoton guardarTodo={onAddTodo}/>
        </div>
        </>
    )
}
export default ContenedorInput