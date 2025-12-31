import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Section = styled.section`
  padding: 160px 20px 100px;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 450px;
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
    font-size: clamp(34px, 6vw, 54px);
    line-height: 1.1;
    margin-bottom: 16px;
  }

  span {
    color: var(--accent);
  }

  p {
    color: var(--muted);
    font-size: 16px;
    max-width: 60ch;
    margin-top: 18px;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;

  .photo-wrapper {
    width: 360px;
    height: 360px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }

  @media (max-width: 950px) {
    margin-top: 24px;
  }
`;

export default function Hero() {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const current = roles[index];
    let timer;

    if (!deleting && text.length < current.length) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 90);
    } else if (!deleting && text.length === current.length) {
      timer = setTimeout(() => {
        setDeleting(true);
      }, 2000);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 60);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <Section id="home" ref={sectionRef}>
      <Left>
        <h1>
          Hi, I’m <span>Krishna</span> — {text}
        </h1>

        <p>
          I build modern, fast, and scalable web applications with clean UI,
          smooth UX, and quality code standards.
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
