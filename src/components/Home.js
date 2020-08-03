import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div>
      <Container className="home" fluid>
        <Image className="home-pic" src="https://images.unsplash.com/photo-1578723786984-c5281f7322e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></Image>
      </Container>
    </div>
  );
}

export default Home;
