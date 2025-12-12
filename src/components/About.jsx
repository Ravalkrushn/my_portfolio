import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1100px;
  margin: 34px auto;
  padding: 26px 20px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 20px;
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent);
  padding: 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.03);
`;

const Badge = styled.span`
  display: inline-block;
  padding: 6px 10px;
  background: var(--glass);
  border-radius: 999px;
  color: var(--muted);
  font-size: 13px;
  margin-bottom: 12px;
`;

const EduItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 46px;
    height: 46px;
    object-fit: cover;
    border-radius: 50%;
  }

  .edu-text {
    flex: 1;
  }

  .edu-title {
    font-weight: 600;
    margin-bottom: 3px;
    color: #fff;
    text-decoration: none;
  }

  .edu-sub {
    font-size: 14px;
    color: var(--muted);
  }

  .edu-year {
    font-size: 14px;
    color: var(--muted);
    white-space: nowrap;
  }
`;

const TechList = styled.ul`
  color: var(--muted);
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  list-style: none;
  padding: 0;
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    width: 18px;
    height: 18px;
  }
`;

export default function About() {
  return (
    <Section id="about">
      {/* LEFT SIDE */}
      <div>
        <Badge>About Me</Badge>

        <p style={{ color: "var(--muted)", margin: "8px 0 8px" }}>
          I’m a BCA student and a passionate frontend developer with experience
          in creating clean, responsive, and user-friendly interfaces. I enjoy
          working with modern tools like React, Angular, and Figma.
        </p>

        <h3 style={{ marginTop: 16 }}>Tech & Tools</h3>

        {/* ICON LIST */}
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
            Git / Github
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
      </div>

      {/* RIGHT SIDE – EDUCATION */}
      <Card>
        <h3 style={{ marginTop: 0 }}>Education</h3>

        <EduItem>
          <a
            href="https://www.dharampurnagarpalika.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/school.jpg" alt="School" />
          </a>

          <div className="edu-text">
            <a
              href="https://www.dharampurnagarpalika.in"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-title"
            >
              Dharampur Nagar-Palika School
            </a>
            <div className="edu-sub">HSC in Gujarat Board</div>
          </div>

          <div className="edu-year">2021–2022</div>
        </EduItem>

        <EduItem>
          <a
            href="https://dolatusha.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/clg.jpg" alt="College" />
          </a>

          <div className="edu-text">
            <a
              href="https://dolatusha.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-title"
            >
              Dolat Usha Institute
            </a>
            <div className="edu-sub">Bachelor of Computer Applications</div>
          </div>

          <div className="edu-year">2023–Present</div>
        </EduItem>
      </Card>
    </Section>
  );
}
