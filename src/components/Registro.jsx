import React from 'react'
import { db } from '../firebase'

const Registro = (props) => {
  //hooks
  const [nombre,setNombre]=React.useState('')
  const [apellido,setApellido]=React.useState('')
  const [telefono,setTelefono] = React.useState('')
  const [fechain,setFechain] = React.useState('')
  const [fechaout,setFechaout] = React.useState('')
  const [habitacion,setHabitacion] = React.useState('')
  const [comentarios,setComentarios] = React.useState('')

  const [id,setId] = React.useState('')
  const [lista,setLista] = React.useState([])
  const [error,setError] = React.useState('')
  const [modoEdicion,SetModoEdicion] = React.useState(false)
 
  
  React.useEffect(()=>{
    const obtenerDatos = async()=>{
      try {
        
        const data= await db.collection(props.user.email).get()
        //console.log(data.docs)
         const arrayData=data.docs.map(doc=>({id:doc.id,...doc.data()}))
        console.log(arrayData);
        setLista(arrayData)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  },[])

  const guardarDatos = async (e)=>{
    e.preventDefault()
    if (!nombre.trim()) {
        setError('nombre no puede quedar vacio')
      return
    }
    if (!apellido.trim()) {
        setError('apellido no puede quedar vacio')
      return
    }
    if (!telefono.trim()) {
        setError('telefono no puede quedar vacio')
        return
      }

    if (!fechain.trim()) {
        setError('fechain no puede quedar vacio')
      return
    }
    if (!fechaout.trim()) {
      setError('fechaout no puede quedar vacio')
    return
  }
    if (!habitacion.trim()) {
        setError('habitacion no puede quedar vacio')
      return
    }
    if (!comentarios.trim()) {
      setError('comentarios no puede quedar vacio')
    return
  }


    try {
      const nuevoUsuario= {
        nombre, 
        apellido,
        telefono, 
        fechain,
        fechaout,
       habitacion,
      comentarios
      }
      const dato= await db.collection(props.user.email).add(nuevoUsuario)

      setLista([
        ...lista,
        {...nuevoUsuario,id:dato.id}
      ])

      setNombre('')
      setApellido('')
      setTelefono('')
      setFechain('')
      setFechaout('')
      setHabitacion('')
      setComentarios('')
      setError(null)

    } catch (error) {
      console.log(error);
    }

   
    
  }

  const eliminarDato=async(id)=>{
    try {
      await db.collection(props.user.email).doc(id).delete()
      const listaFiltrada = lista.filter((elemento)=>elemento.id!==id)
      setLista(listaFiltrada)
    } catch (error) {
      console.log(error)
    }
  }

  const editar=(elemento)=>{
    SetModoEdicion(true)
    
    setId(elemento.id)
    setNombre(elemento.nombre)
    setApellido(elemento.apellido)
    setTelefono(elemento.telefono)
    setFechain(elemento.fechain)
    setFechaout(elemento.fechaout)
    setHabitacion(elemento.habitacion)
    setComentarios(elemento.comentarios)
  }

  const editarDatos=async(e)=>{
    e.preventDefault()
    if (!nombre.trim()) {
      setError('nombre no puede quedar vacio')
    return
  }
  if (!apellido.trim()) {
      setError('apellido no puede quedar vacio')
    return
  }
  if (!telefono.trim()) {
      setError('telefono no puede quedar vacio')
      return
    }

  if (!fechain.trim()) {
      setError('fechain no puede quedar vacio')
    return
  }
  if (!fechaout.trim()) {
    setError('fechaout no puede quedar vacio')
  return
}
  if (!habitacion.trim()) {
      setError('habitacion no puede quedar vacio')
    return
  }
  if (!comentarios.trim()) {
    setError('comentarios no puede quedar vacio')
  return
}

    try {
      await db.collection(props.user.email).doc(id).update({
        nombre,apellido,telefono,fechain,fechaout,habitacion,comentarios
      })

      const listaEditada=lista.map((elemento)=>elemento.id===id ?
      {id:id,
        Nombre: nombre, 
           apellido,
           telefono, 
           fechain,
         fechaout,
          habitacion,
          comentarios} : elemento
      )

      setLista(listaEditada)

      SetModoEdicion(false)
      setNombre('')
      setApellido('')
      setTelefono('')
      setFechain('')
      setFechaout('')
      setHabitacion('')
      setComentarios('')
      setId('')
      setError(null)

    } catch (error) {
      console.log(error)
    }

  }

   

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">{modoEdicion ? 'Edicion de Requerimientos': 'Realizar una reserva'}</h2>
          <form onSubmit={modoEdicion ? editarDatos: guardarDatos}>
            {
              error ? (
                <div className="alert alert-danger" role={alert}>
                  {error}
                </div>
              ):
              null
            }
            
           
            <input type="text" placeholder="Ingrese el Nombre" className="form-control mb-2" onChange={(e)=>{setNombre(e.target.value)}} value={nombre}/>
            
            <input type="text" placeholder="Ingrese el Apellido" className="form-control mb-2" onChange={(e)=>{setApellido(e.target.value)}} value={apellido}/>
            
            <input type="number" placeholder="Ingrese la Telefono" className="form-control mb-2" onChange={(e)=>{setTelefono(e.target.value)}} value={telefono}/>

            <input type="date" placeholder="Ingrese Fecha de check-in" className="form-control mb-2" onChange={(e)=>{setFechain(e.target.value)}} value={fechain}/>

            <input type="date" placeholder="Ingrese Fecha de check-out" className="form-control mb-2" onChange={(e)=>{setFechaout(e.target.value)}} value={fechaout}/>
            <select className='form-select mb-2' onChange={(e)=>{setHabitacion(e.target.value)}}>
                <option selected>Seleccione una habitacion</option>
                <option>Habitacion Doble</option>
                <option>Habitacion Familiar</option>
                <option>Suite Presidencial</option>
            </select>
            <input type="text" placeholder="Ingrese Comentarios" className="form-control mb-2" onChange={(e)=>{setComentarios(e.target.value)}} value={comentarios}/>
            
            <div className="d-grid gap-2">
              {
                modoEdicion ? <button className="btn btn-outline-warning" type="submit">Editar</button>:
                <button className="btn btn-outline-info" type="submit">Reservar</button>
              }
            </div>
          </form>
        </div>  
      </div>
      <hr/>
      <div className="row">
        <div className="cold-12">
          <h2 className="text-center">Mis Reservaciones</h2>
          <ul className="list-group">
            {
              lista.map(
                (elemento)=>(
                  <li className="list-group-item" key={elemento.id}> 
                  <b>Nombre :</b> {elemento.nombre} <br></br>
                  <b>Apellido :</b> {elemento.apellido} <br></br>
                  <b>Telefono :</b> {elemento.telefono} <br></br>
                  <b>Fecha de check-in :</b> {elemento.fechain}<br></br>
                  <b>Fecha de check-out:</b> {elemento.fechaout}<br></br>
                  <b>Comentarios:</b> {elemento.comentarios}<br></br>
                  <button className="btn btn-success float-end mx-2" onClick={()=>editar(elemento)} >Editar</button>
                  <button className="btn btn-danger float-end mx-2" onClick={()=>eliminarDato(elemento.id)}>Eliminar</button>
                  </li>
                )
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Registro