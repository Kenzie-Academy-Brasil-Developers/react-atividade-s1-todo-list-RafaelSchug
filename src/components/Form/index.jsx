import './style.css';
import { useState } from "react";

const Form = ({addTodo}) => {

    const [inputText, setIinputText] = useState('');

    return (
        <div className="form__container">
            <h3>Adicionar afazeres</h3>
            <form>
                <input autoFocus onChange={(e)=>{setIinputText(e.target.value)}} value={inputText} type="text" placeholder='Inserir novo ítem' />
                <button className="btn-default btn--add" onClick={(e)=> {addTodo(e, inputText); setIinputText('')}}>Enviar</button>
            </form>
        </div>
    )
}

export default Form;