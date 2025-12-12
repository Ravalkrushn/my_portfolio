import React, { useState } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";

/* ---------- STYLES ---------- */

const Section = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 38px;
  margin-bottom: 10px;
`;

const Sub = styled.p`
  text-align: center;
  color: var(--muted);
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
  gap: 26px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.22);
`;

const Img = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 14px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0;
`;

const Tag = styled.span`
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  font-size: 13px;
`;

const BtnRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 14px;
`;

const Btn = styled.button`
  padding: 10px 18px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.09);
  color: #fff;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`;

/* ---------- MODAL ---------- */

const ModalWrap = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  overflow-y: auto; /* Modal scroll allowed */
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 700px;
  background: #111827;
  padding: 20px;
  border-radius: 14px;
  position: relative;
  z-index: 4000;
`;

const ModalImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  background: #0f172a;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const Close = styled.button`
  position: fixed;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  border: none;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.4);
  transition: 0.2s ease;

  &:hover {
    background: #fff;
    transform: translateY(-50%) scale(1.1);
  }
`;

/* ---------- MAIN COMPONENT ---------- */

export default function Projects() {
  const [modalImages, setModalImages] = useState(null);

  const openModal = (photos) => {
    setModalImages(photos);
    document.body.style.overflow = "hidden"; // STOP background scroll
  };

  const closeModal = () => {
    setModalImages(null);
    document.body.style.overflow = "auto"; // ENABLE background scroll
  };

  /* ---------- PROJECT LIST ---------- */

  const projects = [
    {
      name: "Online Pet Items Purchasing",
      date: "2025 – Present",
      desc: "A MERN stack e-commerce platform for pet products.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      img: "/pets.png",
      photos: [
        "/pets.png",
        "/p1.png",
        "/p2.png",
        "/p3.png",
        "/p4.png",
        "/p5.png",
        "/p6.png",
        "/p7.png",
        "/p8.png",
      ],
      source: "https://github.com/Ravalkrushn/reactproject",
    },

    {
      name: "My Portfolio",
      date: "Dec 2025 – Present",
      desc: "My personal portfolio with animations and responsive UI.",
      tech: ["React.js", "Javascript", "TailwindCSS", "GSAP"],
      img: "/portfolio.png",
      photos: ["/portfolio.png", "/port2.png", "/port3.png", "/port4.png"],
      source: "https://github.com/yourrepo/portfolio",
    },

    {
      name: "Tic-Tac-Toe",
      date: "2024",
      desc: "A simple but polished Tic-Tac-Toe game.",
      tech: ["React.js", "Javascript"],
      img: "/tictaktoc.png",
      photos: ["/tictaktoc.png", "/crud.png"],
      source: "https://github.com/yourrepo/tictactoe",
    },
  ];

  return (
    <Section id="projects">
      <Title>Check out my latest work</Title>
      <Sub>
        Here are a few of my favorite projects, built using modern web tools.
      </Sub>

      <Grid>
        {projects.map((p, i) => (
          <Card key={i}>
            <Img src={p.img} />

            <h3>{p.name}</h3>
            <p style={{ color: "var(--muted)" }}>{p.date}</p>

            <p style={{ marginTop: 6 }}>{p.desc}</p>

            <Tags>
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Tags>

            <BtnRow>
              <Btn onClick={() => openModal(p.photos)}>Photos</Btn>
              <Btn onClick={() => window.open(p.source, "_blank")}>Source</Btn>
            </BtnRow>
          </Card>
        ))}
      </Grid>

      {modalImages && (
        <ModalWrap>
          <ModalBox>
            <Close onClick={closeModal}>
              <FiX />
            </Close>

            {modalImages.map((img, i) => (
              <ModalImg key={i} src={img} />
            ))}
          </ModalBox>
        </ModalWrap>
      )}
    </Section>
  );
}
