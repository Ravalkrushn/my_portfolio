import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import styled from "styled-components";
import Projects from "./components/Projects";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <Navbar />
      <main style={{ flex: "1 0 auto" }}>
        <Hero />
        <About />
        <Services />
        <Projects />
      </main>
      <Footer />
    </Container>
  );
}
