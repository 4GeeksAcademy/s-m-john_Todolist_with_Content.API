import React from 'react';
import { useParams } from 'react-router-dom'


export default function TodoPage({ todoList}) {

    const { todoList } = useContext(Context);
    const{ index } = useParams();

    const todo = todoList[index];
    
    return (
        <div>
            <h1>Todo Page for todo {index}</h1>
            <p>{todo}</p>

            <Link to="/">
                <p>Go home</p>
            </Link>
        </div>
    )
}