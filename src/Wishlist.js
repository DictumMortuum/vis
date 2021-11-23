import React, { useState, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import './Wishlist.css';

const isValidHttpUrl = s => {
  try {
    new URL(s)
  } catch (_) {
    return false
  }

  return true
}

const List = props => {
  return (
    <Grid container alignContent="center" alignItems="center">
      <Grid item xl={4} md={3} xs={1}></Grid>
      <Grid item xl={4} md={6} xs={10}>
        <h2>{props.owner}'s wishlist!</h2>
        <ul style={{ padding: 0}}>
          {props.items.sort((a, b) => a.Id < b.Id).map(wish => ListItem(wish))}
        </ul>
      </Grid>
      <Grid item xl={4} md={3} xs={1}></Grid>
    </Grid>
  );
}

const Text = props => {
  if (!isValidHttpUrl(props.Desc)) {
    return <span>{props.Title}</span>
  } else {
    return <a href={props.Desc}>{props.Title}</a>
  }
}

const ListItem = props => {
  const [have, setHave] = useState(props.Status === "RESERVED");
  const [isSending, setIsSending] = useState(false)

  const sendRequest = useCallback(async() => {
    const status = have ? "AVAILABLE" : "RESERVED"

    if (isSending) {
      return
    }

    setIsSending(true)

    await fetch('https://0jq009rhqf.execute-api.eu-north-1.amazonaws.com/default/servus', {
      method: "POST",
      body: JSON.stringify({
        ...props,
        status: status,
      })
    })

    setIsSending(false)
    setHave(!have)
  }, [isSending, props, have])

  return (
    <li className={have ? 'active' : 'notactive'} key={props.Id}>
      <Grid container alignContent="center" alignItems="center">
        <Grid item md={6} xs={12} style={{ padding: 5 }}>
          <Text {...props} />
        </Grid>
        <Grid item md={6} style={{ textAlign: "right", padding: 5 }} xs={12}>
          <button onClick={sendRequest}>{have ? 'Reserved' : 'Available'}</button>
        </Grid>
      </Grid>
    </li>
  )
}

export default List;
