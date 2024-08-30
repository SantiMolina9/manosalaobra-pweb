function InputBoton(){
    //Este componente contiene el imput donde ingresa la tarea y el boton de send
    return (
        <>
        <input type = 'text' id = 'input' className= 'input' placeholder = 'Ingrese una tarea'></input>
        <button className = 'boton'>ADD</button>
        </>
    )
}
export default InputBoton