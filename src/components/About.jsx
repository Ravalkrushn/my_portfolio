import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  @media (max-width: 480px) {
    padding: 20px 16px;
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
  margin: 24px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const TechIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 18px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--muted);
  font-size: 15px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 80px;

  &:nth-child(-n + 3) {
    flex: 0 1 calc(33.33% - 12px);
  }
  &:nth-child(4),
  &:nth-child(5) {
    flex: 0 1 calc(48% - 12px);
  }
  &:nth-child(6) {
    flex: 0 1 80%;
  }

  @media (max-width: 480px) {
    padding: 8px 6px;
    font-size: 11px;
    gap: 6px;

    &:nth-child(-n + 3) {
      flex: 0 1 calc(33.33% - 6px);
    }
    &:nth-child(4),
    &:nth-child(5) {
      flex: 0 1 calc(50% - 6px);
    }
    &:nth-child(6) {
      flex: 0 1 100%;
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-3px);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.15);

    ${TechIcon} {
      box-shadow: 0 0 20px
        ${(props) => props.$shadowColor || "rgba(255,255,255,0.2)"};
      background: rgba(255, 255, 255, 0.1);
      transform: scale(1.05);
    }
  }
`;

const Card = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent);
  padding: 18px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }
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
    border-radius: 10px;
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
    transition: color 0.2s ease;

    &:hover {
      color: #646cff;
    }
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
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px 0;

    .year {
      margin-top: 4px;
      font-weight: 500;
    }
  }
`;

const tech = [
  {
    name: "React.js",
    image: "/react.svg",
    shadow: "rgba(97, 218, 251, 0.5)",
  },
  {
    name: "Vite",
    image: "/vite.svg",
    shadow: "rgba(100, 108, 255, 0.5)",
  },
  {
    name: "MongoDB",
    image: "/mongodb.svg",
    shadow: "rgba(71, 162, 72, 0.5)",
  },
  {
    name: "Figma / UI Design",
    image: "/figma.svg",
    shadow: "rgba(255, 114, 94, 0.5)",
  },
  {
    name: "Responsive Design",
    image: "/responsive.svg",
    shadow: "rgba(76, 175, 80, 0.5)",
  },
  {
    name: "Git / GitHub",
    image: "/github.svg",
    shadow: "rgba(240, 80, 51, 0.5)",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const techListRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate the whole section on scroll
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Animate the "About Me" badge
      gsap.fromTo(
        badgeRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // 3. Animate Tech list items
      gsap.fromTo(
        techListRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: techListRef.current,
            start: "top 85%",
          },
        }
      );

      // 4. Add GSAP hover animation on TechItem
      const techItems = gsap.utils.toArray(techListRef.current.children);
      techItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            scale: 1.05,
            y: -5, // Maintain/enhance the translateY effect from CSS
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        });
      });

      // 5. Animate Education cards
      const eduItems = Array.from(educationRef.current.children).filter(
        (child) => child.tagName === "DIV"
      );

      if (eduItems.length > 0) {
        // Left card
        gsap.fromTo(
          eduItems[0],
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: educationRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (eduItems.length > 1) {
        // Right card
        gsap.fromTo(
          eduItems[1],
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: educationRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="about" ref={sectionRef}>
      <Left>
        <Badge ref={badgeRef}>About Me</Badge>

        <Text>
          I’m a BCA student and a passionate frontend developer who enjoys
          building clean, modern, and responsive user interfaces. I focus on
          performance, accessibility, and smooth user experience.
        </Text>

        <Title>Tech & Tools</Title>

        <TechList ref={techListRef}>
          {tech.map((t, i) => (
            <TechItem key={i} $shadowColor={t.shadow}>
              <TechIcon $shadowColor={t.shadow}>
                <img src={t.image} alt={t.name} />
              </TechIcon>
              {t.name}
            </TechItem>
          ))}
        </TechList>
      </Left>

      <Card ref={educationRef}>
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
