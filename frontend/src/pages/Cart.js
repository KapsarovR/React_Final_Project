import React, { useContext } from "react";
import CartContext from "../context/cart-context";
import CartItem from "../components/CartItem";
import { Container } from "@mui/system";

const ulStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export default function Cart() {
  const data = useContext(CartContext);

  return (
    <>
      <Container maxWidth="lg">
        <h1>Cart</h1>
        <ul style={ulStyle}>
          {!data.newCart.length && <p>There is no product in cart.</p>}
          {data.newCart.map((item) => (
            <li key={item.id}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
