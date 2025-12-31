import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1100px;
  margin: 40px auto;
  padding: 26px 20px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Badge = styled.span`
  align-self: flex-start;
  padding: 6px 12px;
  background: var(--glass);
  border-radius: 999px;
  color: var(--muted);
  font-size: 13px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  color: var(--muted);
  margin: 6px 0 12px;
  font-size: 15px;
  line-height: 1.6;
`;

const Title = styled.h3`
  margin: 16px 0 10px;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 14px;

  img {
    width: 18px;
    height: 18px;
  }
`;

const Card = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent);
  padding: 18px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const EduItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    object-fit: cover;
  }

  .info {
    flex: 1;
  }

  .title {
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    display: block;
    margin-bottom: 4px;
  }

  .sub {
    font-size: 14px;
    color: var(--muted);
  }

  .year {
    font-size: 14px;
    color: var(--muted);
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    align-items: flex-start;
    .year {
      margin-left: auto;
    }
  }
`;

export default function About() {
  return (
    <Section id="about">
      <Left>
        <Badge>About Me</Badge>

        <Text>
          I’m a BCA student and a passionate frontend developer who enjoys building
          clean, modern, and responsive user interfaces. I focus on performance,
          accessibility, and smooth user experience.
        </Text>

        <Title>Tech & Tools</Title>

        <TechList>
          <TechItem>
            <img src="/logo192.png" alt="React" />
            React.js
          </TechItem>

          <TechItem>
            <img src="/vite.svg" alt="Vite" />
            Vite
          </TechItem>

          <TechItem>
            <img src="/github.png" alt="GitHub" />
            Git / GitHub
          </TechItem>

          <TechItem>
            <img src="/figma.png" alt="Figma" />
            Figma / UI Design
          </TechItem>

          <TechItem>
            <img src="/responsive.png" alt="Responsive" />
            Responsive Design
          </TechItem>
        </TechList>
      </Left>

      <Card>
        <Title>Education</Title>

        <EduItem>
          <a
            href="https://www.dharampurnagarpalika.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/school.jpg" alt="School" />
          </a>

          <div className="info">
            <a
              href="https://www.dharampurnagarpalika.in"
              target="_blank"
              rel="noopener noreferrer"
              className="title"
            >
              Dharampur Nagar-Palika School
            </a>
            <div className="sub">HSC in Gujarat Board</div>
          </div>

          <div className="year">2021–2022</div>
        </EduItem>

        <EduItem>
          <a
            href="https://dolatusha.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/clg.jpg" alt="College" />
          </a>

          <div className="info">
            <a
              href="https://dolatusha.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="title"
            >
              Dolat Usha Institute
            </a>
            <div className="sub">Bachelor of Computer Applications</div>
          </div>

          <div className="year">2023–Present</div>
        </EduItem>
      </Card>
    </Section>
  );
}
