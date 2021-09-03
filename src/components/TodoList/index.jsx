import './style.css';

const TodoList = ({todoList, handleTodo}) => {

    return (
       <ul className="todo__content">
           {todoList.map((element, index)=>{
               return (
                <li key={index}>
                    <p>{element}</p>
                    <button className="btn-default btn--task" onClick={()=> handleTodo(index)}>Concluir</button>
                </li>
               )
           })}
       </ul>
   )
}


export default TodoList;