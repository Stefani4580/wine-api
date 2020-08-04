import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function WineDetails(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
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
      </Card>
    </div>
  );
}

export default WineDetails;
