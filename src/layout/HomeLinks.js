import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Nuevo Paciente</NavLink></li>
        <li><NavLink to='/'>Cerrar Sesión</NavLink></li>
        <li><NavLink to='/' className="nn">NN</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks;