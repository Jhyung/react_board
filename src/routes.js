import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Header from './components/common/Header';
import Main from './components/main/Main';
import Board from './components/board/Board';
import ManageBoard from './components/board/ManageBoard';

export default (
    <Route path="/" component={Header}>
        <IndexRoute component={Main} />
        <Route path="main" component={Main} />
        <Route path="board" component={Board} />
        <Route path="board/:id" component={ManageBoard} />
        <Route path="write" component={ManageBoard} />
    </Route>
);