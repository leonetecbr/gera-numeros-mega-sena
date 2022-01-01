import React from "react"

import Button from './Button'
import Checkbox from './Checkbox'

const TEXT_ALL = 'Gerando números aleatoriamente sem filtos, podendo ser apenas números muito baixos ou apenas muito altos.'
const TEXT_SOME = 'Gerando números aletoriamente com filtros, garantindo que haja números altos e baixos na aposta.'

let checkbox, description, all = false

class GeraNumero extends React.Component{
  constructor(props){
    super(props)
    
    let nums = this.Obter6Numeros(all)
    this.state = { nums: nums }
  }

  GerarNumero(fase) {
    let min = 1 * (fase * 20) - 20 + 1
    let max = 20 * fase

    if (all) {
      min = 1
      max = 60
    }

    return ('00' + Math.floor(Math.random() * (max - min) + min)).slice(-2)
  }

  Obter6Numeros() {
    let nums = []
    for (let i = 0; i < 6; i++) {
      let fase
      if (i < 2) fase = 1
      else if (i < 4) fase = 2
      else if (i < 6) fase = 3
      let num = this.GerarNumero(fase)
      while (num === nums[nums.length - 1]) {
        num = this.GerarNumero(fase)
      }
      nums.push(num)
    }

    nums.sort((a, b) => {
      if (a > b) return 1
      if (b > a) return -1
      return 0
    })

    return nums
  }

  mudou(classe){
    checkbox = document.getElementById('todos')
    description = document.getElementById('descricao')
    all = checkbox.checked
    if (all) description.innerHTML = TEXT_ALL
    else description.innerHTML = TEXT_SOME
    classe.setState({nums: classe.Obter6Numeros()})
  }

  reload(classe){
    classe.setState({ nums: classe.Obter6Numeros() })
  }

  render() {
    return (
      <React.Fragment>
        <div id="numeros">
          <div className="numero" key='1'>{this.state.nums[0]}</div>
          <div className="numero" key='2'>{this.state.nums[1]}</div>
          <div className="numero" key='3'>{this.state.nums[2]}</div>
          <div className="numero" key='4'>{this.state.nums[3]}</div>
          <div className="numero" key='5'>{this.state.nums[4]}</div>
          <div className="numero" key='6'>{this.state.nums[5]}</div>
        </div>
        <Button title="Atualizar" onClick={this.reload} context={this}/>
        <p className="my-3" key="p-1">
          <Checkbox title="todos" onChange={this.mudou} context={this}/> <label htmlFor="todos"><span id="descricao">{TEXT_SOME}</span></label>
        </p>
      </React.Fragment>
    )
  }
}

export default GeraNumero