import './App.css';
import List from './Wishlist';
import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const transform = wishes => {
  const data = {}

  wishes.map(wish => {
    if (data[wish.Owner] === undefined) {
      data[wish.Owner] = {}
      data[wish.Owner].id = wish.CalendarId
      data[wish.Owner].owner = wish.Owner
      data[wish.Owner].items = []
    }

    data[wish.Owner].items.push(wish)

    return wish
  })

  return Object.keys(data).map(w => data[w])
}

const App = () => {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    fetch('https://0jq009rhqf.execute-api.eu-north-1.amazonaws.com/default/servus')
      .then(results => results.json())
      .then(data => {
        console.log(data)
        setWishes(data)
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return (
    <Router>
      <Switch>
        {transform(wishes).map(wishlist => <Route key={wishlist.id} path={"/" + wishlist.owner} component={() => <List {...wishlist} />} />)}
      </Switch>
    </Router>
  );
}

export default App;
