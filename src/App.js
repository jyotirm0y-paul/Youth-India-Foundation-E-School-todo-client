import './App.css';
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/Todo/TodoList";
import CreateTodo from "./components/Todo/CreateTodo";
import EditTodo from "./components/Todo/EditTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
           <Route exact path="/" component={TodoList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
