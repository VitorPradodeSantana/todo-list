import { React, useState } from 'react'
import TodoList from './TodoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const ListaItens = () => {
  const [itemsList, setItemsList] = useState([])
  console.log(itemsList)

  return (
    <div>
      <ul className="lista">
        {itemsList.map((item, index) => (
          <li className="itemLista">
            <div>
              <input type="checkbox" name="check" id="check" />
              <p key={index}>{item}</p>
            </div>
            <div>
              <button>
                <FontAwesomeIcon icon={faPencil} />
              </button>
              <button>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaItens
