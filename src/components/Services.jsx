import React from "react";
import styled from "styled-components";
import { FiMonitor, FiCode, FiGlobe } from "react-icons/fi";

const Section = styled.section`
  max-width: 1100px;
  margin: 6px auto 30px;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
  padding: 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function Services() {
  const services = [
    {
      icon: <FiMonitor size={20} />,
      title: "UI/UX Development",
      body: "Pixel-perfect responsive interfaces with attention to accessibility and performance.",
    },
    {
      icon: <FiCode size={20} />,
      title: "Frontend Engineering",
      body: "Reusable component systems, state management, and clean architecture.",
    },
    {
      icon: <FiGlobe size={20} />,
      title: "Web App Optimization",
      body: "Bundle optimization, lazy loading, and faster time-to-interactive.",
    },
  ];

  return (
    <Section id="services">
      <h3 style={{ margin: "6px 0 12px" }}>Services I offer</h3>
      <Grid>
        {services.map((s, i) => (
          <Card key={i}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div
                style={{
                  background: "var(--glass)",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                {s.icon}
              </div>
              <div style={{ fontWeight: 700 }}>{s.title}</div>
            </div>

            <div style={{ color: "var(--muted)", fontSize: 14 }}>{s.body}</div>

            <div style={{ marginTop: "auto" }}>
              <a
                href={`mailto:ravalk638@gmail.com?subject=I want to discuss about ${encodeURIComponent(
                  s.title
                )}&body=Hi, I’m interested in your service: ${encodeURIComponent(
                  s.title
                )}. Please share more details.`}
                style={{ fontSize: 13 }}
              >
                Discuss this →
              </a>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
