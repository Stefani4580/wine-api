import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Wine from "./Wine";

const Wines = (props) => {

    let { path, url } = useRouteMatch();
    const [data, setData] = useState(null);

    async function getWines() {
      try {
        const response = await axios.get("http://myapi-profstream.herokuapp.com/api/6054d6/wines");
        setData(response.data);
      } catch(e) {
        console.error(e);
      }
    }

// Execute this function just once to populate the Wine tree.
    useEffect(() => {
        getWines();
    }, [])

const wines = data.map((wine) => {
        return (
            <ListGroup.Item key={wine.id}><Link to={`${url}/${wine.id}`}>{`${wine.name} (${wine.year})`}</Link></ListGroup.Item>    
        )
})

    return (
      <div>
        <h1>Wines</h1>
        <ListGroup>

        {wines}
          {/* { data ? data.map(book => <li key={ book.id }><Link to={ `${url}/${book.id}` }>{ book.title }</Link></li>): "Loading..."} */}

        </ListGroup>
        </ul>
        <Switch>
          <Route exact path={path}>
            <h3>Choose a book in the list above</h3>
          </Route>
          <Route path={`${path}/:bookId`}>
            <Book />
          </Route>
        </Switch>
      </div>
    )
}

export default Wines;