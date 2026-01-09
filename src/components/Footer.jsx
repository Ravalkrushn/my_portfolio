import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";

const FooterWrap = styled.footer`
  padding: 40px 0;
  display: flex;
  justify-content: center;
`;

const IconBar = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  padding: 10px 26px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  @media (max-width: 480px) {
    padding: 8px 20px;
    gap: 18px;
  }
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  opacity: 0.8;
  transition: 0.25s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 28px;
  background: rgba(255, 255, 255, 0.2);
`;

export default function Footer() {
  return (
    <FooterWrap>
      <IconBar>
        <IconButton href="#home">
          <FiHome />
        </IconButton>

        <Divider />

        <IconButton
          href="https://www.linkedin.com/in/krushnraval112211/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </IconButton>

        <IconButton
          href="https://github.com/Ravalkrushn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </IconButton>

        <IconButton
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </IconButton>
      </IconBar>
    </FooterWrap>
  );
}
