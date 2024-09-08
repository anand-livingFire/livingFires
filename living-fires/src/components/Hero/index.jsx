// src/components/Hero.js
import React from "react";
import styled from "styled-components";

const HeroContainer = styled.section`
  width: 100%;
  height: 90vh;
  background-image: url('/path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const HeroText = styled.div`
  color: black;
  h1 {
    font-size: 3rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.5rem;
    margin-top: 20px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Hero = () => (
  <HeroContainer>
    <HeroText>
      <h1>Welcome to Living Fire</h1>
      <p>Your premier fireplace provider</p>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="1400"
          height="650"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F76766SEEUOqwZfpWtU2Vmv%2FLiving-Fire-Website-Redesign%3Fnode-id%3D2185-2143%26node-type%3DFRAME%26t%3DWnxrUAE2YGMfjqmv-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D11%253A17%26starting-point-node-id%3D2185%253A2143"
          allowFullScreen
        ></iframe>
      </div>
    </HeroText>
  </HeroContainer>
);

export default Hero;
