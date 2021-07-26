import React from 'react';
import ToDoForm from './ToDoForm';

const CreateTodo = () => {


  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo Item</h3> 
        <ToDoForm />
      </div>
    </div>
  );
};

export default CreateTodo;