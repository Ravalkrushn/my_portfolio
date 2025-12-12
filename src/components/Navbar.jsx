import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

// 🔥 Smooth changing gradient animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  25% { background-position: 50% 50%; }
  50% { background-position: 100% 50%; }
  75% { background-position: 50% 50%; }
  100% { background-position: 0% 50%; }
`;

const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 60;
  backdrop-filter: blur(6px);
  background: linear-gradient(
    180deg,
    rgba(11, 17, 28, 0.7),
    rgba(11, 17, 28, 0.35)
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
`;

const NavInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 🔥 Right alignment fixed */
  gap: 12px;
`;

const Brand = styled.a`
  font-weight: 700;
  letter-spacing: 0.4px;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;

  /* Animated logo box */
  .logo-box {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: linear-gradient(
      45deg,
      #7c5cff,
      #4ad7ff,
      #ff5cf3,
      #00eaff,
      #ff9f1c,
      #6aff6a,
      #ff3f8e
    );
    background-size: 500% 500%;

    background-size: 300% 300%;
    animation: ${gradientAnimation} 6s ease infinite; /* 🔥 Smooth mix animation */
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 18px;
  align-items: center;

  a {
    color: var(--muted);
    padding: 8px 10px;
    border-radius: 8px;
    transition: all 0.18s;
    &:hover {
      color: #fff;
      background: var(--glass);
    }
  }

  @media (max-width: 820px) {
    position: fixed;
    right: 16px;
    top: 64px;
    background: linear-gradient(
      180deg,
      rgba(11, 17, 28, 0.9),
      rgba(11, 17, 28, 0.95)
    );
    padding: 12px;
    border-radius: 10px;
    flex-direction: column;
    box-shadow: 0 6px 18px rgba(2, 6, 23, 0.6);
  }
`;

const MenuBtn = styled.button`
  display: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: var(--muted);
  @media (max-width: 820px) {
    display: block;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <NavInner>
        <Brand href="#home">
          {/* 🔥 Animated Gradient Square */}
          <div className="logo-box"></div>
          Krishna Raval
        </Brand>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <NavLinks style={{ display: open ? "flex" : undefined }}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
          </NavLinks>

          <MenuBtn onClick={() => setOpen((s) => !s)} aria-label="toggle menu">
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </MenuBtn>
        </div>
      </NavInner>
    </Nav>
  );
}
