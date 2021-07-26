import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const ToDoForm = () => {
let history = useHistory()
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
    fetch('https://tranquil-dusk-65346.herokuapp.com/addToDo',{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
            .then(data => {
              console.log(data)

            })
            .catch(error => {
                console.error(error)
            })
            history.push('/')
  }
  // console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
      <label htmlFor="text">Text:</label>
    <input
    className="form-control"
     {...register("toDo", { required: true })} />
    </div>
    <div className="form-group">
    <button
    className="btn btn-primary"  
    type="submit" >
      Save Todo
    </button>
    </div>
  </form>
  );
};

export default ToDoForm;