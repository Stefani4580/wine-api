import React from "react";
// import ListGroup from "react-bootstrap/ListGroup";
// import Card from "react-bootstrap/Card";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

function WineDetails(props) {
  return (
    <div>
        <h1>{props.wine.name}</h1>
        <h2>{props.wine.year}</h2>
        <p>{props.wine.description}</p>
        {/* I tried to use React Bootstrap, but it wasn't working */}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.wine.picture} />
        <Card.Body>
          <Card.Title>{props.wine.name}</Card.Title>
          <Card.Text>{props.wine.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.wine.year}</ListGroupItem>
          <ListGroupItem>{props.wine.grapes}</ListGroupItem>
          <ListGroupItem>{props.wine.country}</ListGroupItem>
          <ListGroupItem>{props.wine.divregion}</ListGroupItem>
          <ListGroupItem>${props.wine.price}</ListGroupItem>
        </ListGroup>
      </Card> */}
    </div>
  );
}

export default WineDetails;
