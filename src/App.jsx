import { useState } from 'react';
import './App.css';
import { validateInputs } from './utils/validateInputs';


function App() {
 
const valoresIniciales = {
  nombre : "",
  apellido : "",
  edad : 0
}


const [form,setForm] = useState(valoresIniciales);
const [error,setError] = useState({})

const {nombre,apellido,edad} = form;


const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
}


const handleBlur = e =>{
 if(e.target.value === "" || +e.target.value === 0){
    setError({
      ...error,
      [e.target.name] : `El campo ${e.target.name} es obligatorio`
    })
 }else{
    setError({
      ...error,
      [e.target.name] : ""
    })
 }
}


const handleSubmit = e =>{
  e.preventDefault();
  if(validateInputs(form)){
    console.error("Los campos del formulario son obligatorios hackerss")
  }else{
    console.log(form)
    setForm(valoresIniciales)
  }
}

  return (
    <>
        <form onSubmit={handleSubmit}>
          <h2>Formularios en react</h2>
          <div>
            <label>Nombre</label><br/>
            <input
            name="nombre"
            type="text"
            placeholder='Ingrese su nombre'
            value={nombre}
            onChange ={handleChange}
            onBlur={handleBlur} />
            { error.nombre && <p style={{color:"red", fontSize : "10px"}}>{error.nombre}</p>}
          </div><br/>
          <div>
            <label>Apellido</label><br/>
            <input
            name="apellido"
            type="text"
            placeholder='Ingrese su apellido'
            value={apellido}
            onChange ={handleChange}
            onBlur={handleBlur}  />
             { error.apellido && <p style={{color:"red", fontSize : "10px"}}>{error.apellido}</p>}
          </div><br/>
          <div>
            <label>Edad</label><br/>
            <input
            name='edad'
            type="number"
            placeholder='Ingrese su edad'
            value={edad}
            onChange ={handleChange}
            onBlur={handleBlur}  />
                { error.edad && <p style={{color:"red", fontSize : "10px"}}>{error.edad}</p>}
          </div><br/>
          <button 
          disabled= {validateInputs(form)}
          type='submit'>Enviar</button>
        </form>
    </>
  )
}


export default App
