import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {TodosLoading} from "../TodosLoading";
import {TodosError} from "../TodosError";
import {TodosEmpty} from "../TodosEmpty";
import React from "react";
import {TodoContext} from "../TodoContext";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";

function AppUI() {
    const {
        loading,
        error,
        searchesTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter/>

            <TodoSearch/>

            <TodoList>
                {loading && (
                    <>
                        <TodosLoading/>
                        <TodosLoading/>
                        <TodosLoading/>
                    </>
                )}
                {error && <TodosError/>}
                {!loading && searchesTodos.length === 0 && <TodosEmpty/>}

                {searchesTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton setOpenModal={setOpenModal}/>
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export {AppUI};