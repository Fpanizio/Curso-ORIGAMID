import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const LimparDados = () => {
  const {limparDados} = useContext(GlobalContext)
  return (
    <button onClick={limparDados}>LimparDados</button>
  )
}

export default LimparDados