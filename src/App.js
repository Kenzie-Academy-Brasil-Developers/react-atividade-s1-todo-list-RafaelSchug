import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (event, newTodo) => {
    event.preventDefault();
    
    if(newTodo){
      setTodoList([...todoList, newTodo]);
    }

  }

  const handleTodo = (targetIndex) => {
    let filtered = todoList.filter((e, idx) => idx !== targetIndex);
    setTodoList(filtered);
  }


  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo}></Form>
        <TodoList todoList={todoList} handleTodo={handleTodo}></TodoList>
      </header>
    </div>
  );
}

export default App;
