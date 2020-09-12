import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import { CatalogView, ProductView } from './components/Blog';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/blogs" component={CatalogView} />
          <Route path="/blog/:id" component={ProductView} />
        </Switch>
        {/* <Main />
        <Blog /> */}
      </>
    );
  }
}

export default App;