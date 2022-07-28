import React, { useEffect, useState } from 'react'

const CompFuncional = () => {
  //creo el objeto 
  const persona = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José"
  };

  const [estado, setEstado] = useState(persona)


  useEffect(
    () => {
    return () => {
      setInterval(
        () => {
        setEstado(
          (objetoEstado) => { 
          let edad = objetoEstado.edad +1;
          return{
            fecha: new Date(),
            edad
          }
        }
        )
      }, 1000);
    }
  },[])



  return (
    <div>
      <h2>
        Hora Actual: {estado.fecha.toLocaleTimeString()}
      </h2>

      <h3>
        {persona.nombre} {persona.apellidos}
      </h3>

      <h1>
        Edad: {estado.edad}
      </h1>

    </div>
  )
}

export default CompFuncional
