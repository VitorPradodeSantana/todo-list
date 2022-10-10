import React from 'react'
import TodoList from './TodoList'

const MyBody = props => {
  return (
    <body>
      <header className="header">
      </header>

      <main>
        <TodoList></TodoList>
      </main>
    </body>
  )
}

export default MyBody
