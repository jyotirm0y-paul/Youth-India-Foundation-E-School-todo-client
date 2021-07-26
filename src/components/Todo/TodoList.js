import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {

  const [toDos, setToDos] = useState([]);
  const [deleteId, setDeleteId] = useState("test");

  const onSubmit = id => {
    fetch(`https://tranquil-dusk-65346.herokuapp.com/deleteTodo/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setDeleteId(id)
        console.log("deleted")
      })
      .catch(error => {
        console.error(error)
      })
      
  }

  useEffect(() => {
    fetch('https://tranquil-dusk-65346.herokuapp.com/todos')
      .then(res => res.json())
      .then(data => setToDos(data))
  }, [deleteId])
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              toDos.map(todo => (
                <tr key={todo._id}>
                  <td>
                    {todo.toDo}
                  </td>
                  <td>
                    <Link todo={todo.toDo} to={`/edit/${todo._id}`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => onSubmit(todo._id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;