import React from "react";

const ListTodos = ({ todos, showOnlyUnfinished, changeCompleted, removeTodo }) => {

    return (
        <div className="topMargin10">
            <ul className="todoItems">
                {
                    todos
                        .filter((todo) => {
                            if (showOnlyUnfinished) {
                                return !todo.completed
                            } else {
                                return true
                            }

                        })
                        .map((todo, i) => {
                            return <li key={todo.id} className="list-group-item">
                                <span
                                    style={{ textDecoration: todo.completed && "line-through" }}
                                    onClick={changeCompleted.bind(this, todo.id)}
                                >{todo.text}</span>
                                <button
                                    style={{ float: "right" }}
                                    onClick={removeTodo.bind(this, todo.id)}>
                                    remove
              </button>
                            </li>
                        })
                }
            </ul>
        </div>

    )
}

export default ListTodos;