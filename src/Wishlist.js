import React, { useState, useCallback } from 'react';
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
    <div className="wishlist">
      <h2>{props.owner}'s wishlist!</h2>
      <ul>
        {props.items.sort((a, b) => a.Id < b.Id).map(wish => ListItem(wish))}
      </ul>
    </div>
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
      <Text {...props} />
      <button onClick={sendRequest}>{have ? 'Reserved' : 'Available'}</button>
    </li>
  )
}

export default List;
