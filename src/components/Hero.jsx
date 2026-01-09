import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    padding-top: 120px;
    gap: 40px;
  }

  @media (max-width: 480px) {
    padding-top: 100px;
    padding-bottom: 60px;
  }
`;

const Left = styled.div`
  h1 {
    font-size: clamp(32px, 8vw, 54px);
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
    /* Add perspective for 3D effect */
    transform-style: preserve-3d;
    will-change: transform;

    @media (max-width: 480px) {
      width: 280px;
      height: 280px;
    }
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: contain;

    @media (max-width: 480px) {
      width: 240px;
      height: 240px;
    }
  }

  @media (max-width: 950px) {
    margin-top: 24px;
  }
`;

export default function Hero() {
  const roles = ["Frontend Developer", "Backend Developer", "Web Designer"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const sectionRef = useRef(null);
  const imageRef = useRef(null); // Ref for the photo wrapper

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. MAIN HERO ENTRANCE (Slide up only)
      // FIX: Removed opacity animation here to prevent conflict with ScrollTrigger
      tl.fromTo(
        sectionRef.current,
        { y: 50 },
        { y: 0, duration: 1, ease: "power3.out" }
      );

      // 2. HEADING TEXT (Staggered)
      tl.from(
        "h1",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Focus effect on Name
      tl.from(
        "h1 span",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      );

      // 4. PARAGRAPH TEXT
      tl.from(
        "p",
        {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // 5. PROFILE IMAGE ENTRANCE (Premium: Scale 0.9->1, Blur->Clear)
      tl.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1"
      );

      // 5. CONTINUOUS FLOATING (Very slow & subtle)
      gsap.to(imageRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 7. SCROLL EXIT (Fade out + Blur)
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.95,
      });
    }, sectionRef);

    // 6. MOUSE INTERACTION (3D Tilt)
    const handleMouseMove = (e) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // FIX: Renamed variables to avoid 'Identifier has already been declared' error
      const rotY = (clientX / innerWidth - 0.5) * 12;
      const rotX = (clientY / innerHeight - 0.5) * -12;

      gsap.to(imageRef.current, {
        rotationY: rotY,
        rotationX: rotX,
        transformPerspective: 1000,
        duration: 1,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      gsap.to(imageRef.current, {
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      ctx.revert();
    };
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
        <div className="photo-wrapper" ref={imageRef}>
          <img
            src="/krishna"
            alt="Krishna"
            width="300"
            height="300"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </Right>
    </Section>
  );
}
