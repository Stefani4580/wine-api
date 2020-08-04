import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Wine from "./Wine";
import ListGroup from "react-bootstrap/ListGroup";

const Wines = (props) => {
  let { path, url } = useRouteMatch();
  const [data, setData] = useState(null);

  async function getWines() {
    try {
      const response = await axios.get(
        "http://myapi-profstream.herokuapp.com/api/6054d6/wines"
      );
      console.log("This is response.data: ", response.data);
      setData(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  // Execute this function just once to populate the Wine tree.
  useEffect(() => {
    getWines();
  }, []);

  //   const wines = data.map((wine) => {
  //     return (
  //       <ListGroup.Item key={wine.id}>
  //         <Link to={`${url}/${wine.id}`}>{`${wine.name} (${wine.year})`}</Link>
  //       </ListGroup.Item>
  //     );
  //   });

  return (
    <div>
      <h1>Wines</h1>
      <Router>
        <ListGroup>
          {/* {wines} */}
          {data
            ? data.map((wine) => (
                <li key={wine.id}>
                  <Link to={`${url}/${wine.id}`}>{wine.name}</Link>
                </li>
              ))
            : "Loading..."}
        </ListGroup>
        <Switch>
          <Route exact path={path}>
            <h3>Choose a wine in the list above</h3>
          </Route>
          <Route path={`${path}/:wineId`}>
            <Wine />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Wines;
