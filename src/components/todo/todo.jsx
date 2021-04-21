import React from 'react';
import './todo.css';

const Todo = (props) => {
  const { todo, deleteTodo } = props;

  return (
    <div className="todos">
      <div className="card-box">
        {todo.todo}
        <i onClick={() => deleteTodo(todo.id)} class="fas fa-minus-circle"></i>
      </div>
    </div>
  );
};

export default Todo;
