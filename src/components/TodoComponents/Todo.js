import React from 'react';

const Todo = props => {
    return (
        <div className={`todo${props.todo.completed ? ' purchased' : ''}`}
        onClick={() => props.toggleCompleted(props.todo.id)}>
            <p>{props.todo.name}</p>
        </div>
    );
};

export default Todo;