import React from 'react'
import ListaItens from './ListaItens'

const todoList = () => {
  return (
    <div className="todoList">
      <header>
        <h4>Nova Tarefa:</h4>
        <form>
          <input type="text" name="nova-tarefa" id="nova-tarefa" />
          <input type="submit" name="btn-add" id="btn-add" />
        </form>
      </header>
      <main>
        <p>
          Edit:
          <input type="text" name="" id="" />
          <input type="submit" value="save" id="" />
        </p>
        <ListaItens></ListaItens>
      </main>
    </div>
  )
}

export default todoList
