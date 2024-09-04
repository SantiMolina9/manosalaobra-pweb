import React, {useState} from 'react'

interface Props {
    guardarTodo: (value: string) => void; 
}

const InputBoton: React.FC<Props> = ({guardarTodo}) => {
    //Este componente contiene el imput donde ingresa la tarea y el boton de send
    const [valorInput, setValorInput] = useState<string>('');
    
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValorInput(event.target.value);
    }

    const handleButton = () => {
        if(valorInput.trim() !== ''){ // Valido que no se guarde una tarea vacia
        guardarTodo(valorInput)
        setValorInput('')
        }
    }

    const handlePress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            handleButton();
        }
    }

    return (
        <>
        <input
        value={valorInput} //Reestablece el valor del input, ya que el setInput pone el valor en vacio 
        onChange = {handleInput} 
        //onKeyPress={handlePress} esta deprecada onKeyPress
        onKeyDown={handlePress}
        type = 'text' 
        className= 'input' 
        placeholder = 'Ingrese una tarea'
        autoFocus
        />
        <button 
        onClick = {handleButton} 
        className = 'boton'
        >ADD</button>
        </>
    )
}   
export default InputBoton