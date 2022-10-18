import { React, useState } from 'react'
import List from './components/List'

const TodoList = () => {
  const [tarefa, setTarefa] = useState('')
  let [itemsList, setItemsList] = useState([])
  let [data, setData] = useState('')

  const childToParent = index => {
    itemsList.splice(index, 1)
    console.log(itemsList)
    setItemsList([...itemsList], itemsList)
  }

  function handleChangeInput(event) {
    const inputTask = event.target.value
    setTarefa(inputTask)
  }

  function handleAddItemToList(event) {
    event.preventDefault()

    if (!tarefa) {
      return
    }

    setItemsList([...itemsList, tarefa])
    setTarefa('')
  }

  function editarElemento(index, item) {
    let input = document.getElementById('editar-elemento')
    input.value = item
  }

  function salvar(e) {
    e.preventDefault()

    let input = document.getElementById('editar-elemento').value
    setData(input)

    console.log(data)

    let index = itemsList.indexOf(input) + 1
  }

  return (
    <div className="todoList">
      <header>
        <h4>Nova Tarefa:</h4>
        <form onSubmit={handleAddItemToList}>
          <input
            type="text"
            name="nova-tarefa"
            id="nova-tarefa"
            value={tarefa}
            onChange={handleChangeInput}
          />
          <input type="submit" name="btn-add" id="btn-add" />
        </form>
      </header>
      <main className="princial-lista-itens">
        <p className="editar-iten">
          Edit:
          <input type="text" name="" id="editar-elemento" />
          <input type="submit" value="Save" id="btn-save" onClick={salvar} />
        </p>
        <List
          itemsList={itemsList}
          childToParent={childToParent}
          editarElemento={editarElemento}
        />
      </main>
    </div>
  )
}

export default TodoList
