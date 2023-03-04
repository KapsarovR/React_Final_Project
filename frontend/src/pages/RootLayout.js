import React from "react";
import { Outlet, json, defer } from "react-router-dom";
import NavBar from "../components/NavBar";
import { tokenLoader } from "../util/auth";
import { CartContextProvider } from "../context/cart-context";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <main>
      <CartContextProvider>
        <NavBar />
      </CartContextProvider>
      <Outlet />
      <Footer />
    </main>
  );
}

async function productsLoader() {
  const res = await fetch("http://localhost:8080/products");

  if (!res.ok) {
    throw json(
      {
        title: "Unable to Fetch Products",
        message:
          "Oops! Something went wrong while trying to fetch the products!",
      },
      { status: 500 }
    );
  }

  return res.json();
}

export async function loader() {
  const products = await productsLoader();
  const token = tokenLoader();
  return defer({ products, token });
}
