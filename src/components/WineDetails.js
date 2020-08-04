import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function WineDetails(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.pic} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.year}</ListGroupItem>
          <ListGroupItem>{props.grapes}</ListGroupItem>
          <ListGroupItem>{props.country}</ListGroupItem>
          <ListGroupItem>{props.region}</ListGroupItem>
          <ListGroupItem>${props.price}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default WineDetails;
