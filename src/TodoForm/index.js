import React from "react";
import "./TodoForm.css";
import {TodoContext} from "../TodoContext";
function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Escribe tu nuevo TODO</label>
            <textarea placeholder="Escriba su TODO" value={newTodoValue} onChange={onChange}/>
            <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
            >
                Agregar
            </button>
        </form>
    );
}

export { TodoForm };