import { useState } from "react"

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
          <div className="col-md-12">
            <label htmlFor="titulo" className="form-label">Título</label>
            <input
              id="titulo"
              type="text"
              className="form-control"
              value={fields.titulo}
              onChange={atualizaInput} />
          </div>
          <div className="col-md-12">
            <label htmlFor="sinopse" className="form-label">Sinopse</label>
            <input
              id="sinopse"
              type="text"
              className="form-control"
              value={fields.sinopse}
              onChange={atualizaInput} />
          </div>
          <div className="col-md-12">
            <label htmlFor="votos" className="form-label">Votos</label>
            <input
              id="votos"
              type="text"
              className="form-control"
              value={fields.votos}
              onChange={atualizaInput} />
          </div>
          <button className="btn btn-primary col-md-3" onClick={adicionar}>Adiconar</button>
        </form>
      </div>
    </>
  )
}


export default App
