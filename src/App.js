import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Admin, Resource } from 'react-admin';
import { WishList, WishCreate } from './resources/wish';
import dataProvider from './dataProvider';

const App = () => {
  return (
    <Router>
      <Admin dataProvider={dataProvider}>
        {/* <Resource name="wishes" list={WishList} edit={EditGuesser} create={WishCreate} /> */}
        <Resource name="wishes" list={WishList} create={WishCreate} />
        <Resource name="people" />
      </Admin>
    </Router>
  );
}

export default App;
