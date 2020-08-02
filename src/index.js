import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import cadastroVideo from './pages/cadastro/Video';
import cadastroCategoria from './pages/cadastro/Categoria';

// Desafio master blaster na descrição
const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={cadastroVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria} />
      <Route component={Pagina404} />
      {' '}
      {/* pÁGINA 404 */}

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
