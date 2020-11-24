import React from "react";
import Container from "./Container";
import Product from "./Product";
import Cart from "./Cart";

export default class App extends React.Component {
  render() {

    return (
      <Container>
        <ul>
          <Product/>
        </ul>
        <hr/>
         <ul>
        <Cart/>
        </ul>
      </Container>
    );
  }
}
