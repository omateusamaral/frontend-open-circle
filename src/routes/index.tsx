import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import User from '../Pages/User';
import ViewUser from '../Pages/ViewUser';
import Page404 from '../Pages/Page404';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/create" component={User} />
        <Route path="/user/:id/edit" component={User} />
        <Route path="/user/:id/view" component={ViewUser} />

        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
