import { useState } from "react"
import { InputForm } from "./components/inputForm"
import { Button } from "./components/button"

function App() {
  const [fields, setFields] = useState({
    titulo: '',
    sinopse: '',
    votos: ''
  })
  // const [titulo, setTitulo] = useState('')
  // const [sinopse, setSinopse] = useState('')

  const adicionar = event => {
    // evita que a pagina seja recarregada
    event.preventDefault()
    console.log('add', fields);
  }
  const atualizaInput = event => {
    //console.log(event.target)
  setFields({ ...fields, [event.target.id]: event.target.value })
  }

  const enviar = event => {
    event.preventDefault()
    console.log('enviar');
  }
  const limpar = event => {
    event.preventDefault()
    console.log('limpar');
  }

  // const atualizaInput = event => {
  //   console.log('atualizando', event.target.value);
  //   setTitulo(event.target.value)
  // }

  // const atualizaSinopse = event => {
  //   console.log('atualizando', event.target.value);
  //   setSinopse(event.target.value)
  // }

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>
        <form className="row g-3">
          <InputForm nome='Titulo' width={10} />
          <InputForm nome='Gênero' width={2} />
          <InputForm nome='Diretor' width={6} />
          <InputForm nome='Sinopse' width={2} />
          <InputForm nome='Votos' width={1} />
          <div className="row mt-3">
          <Button tipo={'submi'} nome='Enviar' width={1} click={enviar}/>
          <Button tipo={'reset'} nome='Limpar' width={1} click={limpar}/>
          </div>
          
        </form>
      </div>
    </>
  )
}


export default App
