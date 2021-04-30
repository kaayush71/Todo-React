import React, { useState, useEffect } from 'react';
import Todo from '../todo/todo';
import './todos.css';
import { db } from '../../config/firebase';
import Navbar from '../../layout/navbar';
import { useAuth } from '../../context/authContext';

const Todos = () => {
  const { currentUser } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await db.collection(currentUser.uid).onSnapshot((querySnapshot) => {
        setTodos(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    };
    getData();
    // eslint-disable-next-line
  }, []);
  const [data, setData] = useState('');
  // const handleChange = (e) => {
  //   setData(e.target.value);
  // };
  const deleteTodo = (id) => {
    // console.log(index);
    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    // setTodos(newTodos);
    db.collection(currentUser.uid).doc(id).delete();
  };
  const handleSublit = (e) => {
    e.preventDefault();
    // if (!data) return;
    addTodo(data);
    setData('');
  };
  const addTodo = (text) => {
    db.collection(currentUser.uid).add({
      todo: text,
    });
    // const newTodos = [...todos, { text }];
    // setTodos(newTodos);
  };

  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="header-box">
          <form onSubmit={handleSublit} className="todo">
            <input
              className="todo-text"
              type="text"
              onChange={(e) => setData(e.target.value)}
              placeholder="What you want to do ...?"
              value={data}
            ></input>
          </form>
        </div>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            setTodos={setTodos}
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
