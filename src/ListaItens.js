import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const ListaItens = () => {
  return (
    <div>
      <ul className="lista">
        <li className="itemLista">
          <input type="checkbox" name="check" id="check" />
          <p>Tarefa</p>
          <button>
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ListaItens
