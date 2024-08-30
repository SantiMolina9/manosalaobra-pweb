import './App.css'
import Encabezado from './components/Encabezado'
import ContenedorInput from './components/ContenedorInput'
import Lista from './components/Lista'
function App() {
  return (
    <div className='contenedor'>
    <Encabezado/>
    <ContenedorInput/>
    <Lista/>
    </div>
  )
}

export default App
