import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import NovoUsuario from './pages/NovoUsuario';
import Login from "./pages/Login";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={NovoUsuario} />
            </Switch>
        </BrowserRouter>
    );
}