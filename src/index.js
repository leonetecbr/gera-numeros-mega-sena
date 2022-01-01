import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import GeraNumero from './components/GeraNumeros'

let body = document.getElementById('root')

function App() {
  return (
    <React.Fragment key='1'>
    <div className="center mt-3">
      <h1>Números da Mega-sena</h1>
      <GeraNumero/>
      <p className="my-3 bolder" key="p-2">
        Aviso legal: Estes números são gerados aleatoriamente, não há qualquer garantia que eles serão sorteados, qualquer aposta feita é única e exclusivamente por sua conta.
      </p>
    </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, body)