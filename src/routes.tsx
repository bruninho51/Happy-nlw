import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

// Switch faz com que apenas uma rota seja exibida em tela
function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Landing} ></Route>
                <Route path="/app" component={OrphanagesMap}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;