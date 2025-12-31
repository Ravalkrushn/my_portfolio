import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  background: linear-gradient(
    180deg,
    rgba(11, 17, 28, 0.75),
    rgba(11, 17, 28, 0.4)
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
`;

const NavInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: var(--accent);
  font-size: 18px;

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
      #ff9f1c
    );
    background-size: 300% 300%;
    animation: ${gradientAnimation} 6s ease infinite;
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
    transition: 0.2s;
  }

  a:hover {
    color: #fff;
    background: var(--glass);
  }

  @media (max-width: 820px) {
    position: fixed;
    top: 64px;
    right: 16px;
    background: linear-gradient(
      180deg,
      rgba(11, 17, 28, 0.95),
      rgba(11, 17, 28, 0.98)
    );
    flex-direction: column;
    padding: 14px;
    border-radius: 12px;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.6);
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const MenuBtn = styled.button`
  background: transparent;
  border: 0;
  color: var(--muted);
  cursor: pointer;
  display: none;

  @media (max-width: 820px) {
    display: flex;
    align-items: center;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 820) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <Nav>
      <NavInner>
        <Brand href="#home">
          <div className="logo-box"></div>
          Krishna Raval
        </Brand>

        <NavLinks open={open}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        </NavLinks>

        <MenuBtn onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </MenuBtn>
      </NavInner>
    </Nav>
  );
}
