import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 160px 20px 100px; /* ⬅ Hero ko niche push kiya */
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 450px; /* ⬅ Photo area bigger */
  gap: 60px;
  align-items: center;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 90px;
  }
`;

const Left = styled.div`
  h1 {
    font-size: clamp(36px, 6vw, 54px);
    color: #fff;
    line-height: 1.1;
    margin: 0 0 16px;
    font-weight: 700;
  }
  span {
    color: var(--accent);
  }
  p {
    margin-top: 16px;
    color: var(--muted);
    font-size: 17px;
    max-width: 60ch;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;

  .photo-wrapper {
    background: rgba(255, 255, 255, 0.04);
    padding: 18px;
    width: 380px;
    height: 380px;
    border-radius: 700px; /* ⬅ Smooth rounded */
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(6px);
    transition: 0.3s ease;
  }

  .photo-wrapper:hover {
    transform: scale(1.02);
  }

  img {
    width: 330px; /* ⬅ Zoom */
    height: 330px;
    object-fit: contain;
    transform: scale(1.15); /* ⬅ More zoom */
    transition: 0.3s ease;
  }

  @media (max-width: 950px) {
    margin-top: 20px;
  }
`;

export default function Hero() {
  return (
    <Section id="home">
      <Left>
        <h1>
          Hi, I'm <span>Krishna</span> — Frontend Developer
        </h1>

        <p>
          I create modern, fast, and professional user interfaces using React. I
          focus on clean design, smooth user experience, and high-quality coding
          standards.
        </p>
      </Left>

      <Right>
        <div className="photo-wrapper">
          <img src="/krishna" alt="Krishna" />
        </div>
      </Right>
    </Section>
  );
}
