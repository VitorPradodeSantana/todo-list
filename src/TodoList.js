import { React, useState } from 'react'
import ListaItens from './ListaItens'

const TodoList = () => {
  const [tarefa, setTarefa] = useState('')

  const itens = []

  const enviaDados = e => {
    e.preventDefault()
    itens.push(tarefa)
    console.log(itens)
  }

  return (
    <div className="todoList">
      <header>
        <h4>Nova Tarefa:</h4>
        <form onSubmit={enviaDados}>
          <input
            type="text"
            name="nova-tarefa"
            id="nova-tarefa"
            value={tarefa}
            onChange={e => setTarefa(e.target.value)}
          />
          <input type="submit" name="btn-add" id="btn-add" />
        </form>
      </header>
      <main className="princial-lista-itens">
        <p className="editar-iten">
          Edit:
          <input type="text" name="" id="" />
          <input type="submit" value="Save" id="" />
        </p>
        <ListaItens></ListaItens>
      </main>
    </div>
  )
}

export default TodoList
