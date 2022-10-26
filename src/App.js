import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Admin, Resource } from 'react-admin';
import { WishList, WishCreate, CouponList } from './resources/wish';
import dataProvider from './dataProvider';
import DiscountIcon from '@mui/icons-material/Discount';

const App = () => {
  return (
    <Router>
      <Admin dataProvider={dataProvider}>
        {/* <Resource name="wishes" list={WishList} edit={EditGuesser} create={WishCreate} /> */}
        <Resource name="wishes" list={WishList} create={WishCreate} />
        <Resource name="people" />
        <Resource icon={DiscountIcon} name="coupons" list={CouponList} />
      </Admin>
    </Router>
  );
}

export default App;
