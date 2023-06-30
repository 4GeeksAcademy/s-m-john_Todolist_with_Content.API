import React, { useState } from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Home from './home.jsx';

export default function Router() {

    const [todoList, setTodoList] = useState([]);

    return (
        <BrowserRouter>
            <Switch>
                <ContextProvider>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/todo/:index">
                        <TodoPage />
                    </Route>
                </ContextProvider>
            </Switch>
        </BrowserRouter>
    )
                
}