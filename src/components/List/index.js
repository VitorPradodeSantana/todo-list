import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const List = props => {
  return (
    <div>
      <ul className="lista">
        {props.itemsList.map((item, index) => (
          <li className="itemLista" key={index}>
            <div>
              <input type="checkbox" name="check" id="check" />
            </div>
            <p>{item}</p>
            <div>
              <button
                onClick={() => {
                  props.editarElemento(index, item)
                }}
              >
                <FontAwesomeIcon icon={faPencil} />
              </button>
              <button
                onClick={() => {
                  props.childToParent(index)
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
