import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'

const EditTodo = () => {
  const [toDos, setToDos] = useState([]);
  const [updateTodo, setUpdateTodo] = useState("");
  const params = useParams();
  let history = useHistory();
 
  useEffect(() => {
    fetch('https://tranquil-dusk-65346.herokuapp.com/todos')
      .then(res => res.json())
      .then(data => setToDos(data))
      
  }, [])

  const update = toDos?.find(x => x._id === params.id);

console.log( update);
    

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://tranquil-dusk-65346.herokuapp.com/updateTodo/${update?._id}`, {
      method: 'PATCH',
    headers:{
      "Content-Type": [ "application/json" ]
    },
    body:JSON.stringify({toDo: updateTodo})
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        })
        history.push("/");
    }

    
      

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Todo Item</h3>  
        <form onSubmit={handleSubmit}>
<input type="text" name="editTodo" onChange={(e) =>setUpdateTodo(e.target.value) } defaultValue={ update?.toDo }/>
<input type="submit" value="Update todo" />
        </form>
      </div>
    </div>
  );
};

export default EditTodo;