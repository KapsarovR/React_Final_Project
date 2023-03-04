import React from "react";
import Carousel from "../components/Carousel";
import { Container } from "@mui/system";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        <h1>Kapsar Stojakovo</h1>
        <Carousel />
      </Container>
    </div>
  );
}
