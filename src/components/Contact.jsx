import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 900px;
  margin: 30px auto 50px;
  padding: 22px 20px;
  border-radius: 14px;

  @media (max-width: 480px) {
    margin: 20px auto 40px;
  }
`;

const Title = styled.h3`
  margin: 0 0 6px;
`;

const Sub = styled.p`
  color: var(--muted);
  margin-bottom: 18px;
  font-size: 14px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: 13px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: transparent;
  color: inherit;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const Textarea = styled.textarea`
  grid-column: 1 / -1;
  padding: 13px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: transparent;
  color: inherit;
  font-size: 14px;
  min-height: 130px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const Btn = styled.button`
  grid-column: 1 / -1;
  padding: 13px 16px;
  border-radius: 12px;
  border: 0;
  background: linear-gradient(90deg, var(--accent), #4ad7ff);
  color: #041022;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(
      `mailto:yourmail@example.com?subject=${subject}&body=${body}`,
      "_self"
    );
  }

  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Sub>Want to work together? Send a message — I reply quickly.</Sub>

      <Form onSubmit={onSubmit}>
        <Input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Your name"
          required
        />

        <Input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Your email"
          type="email"
          required
        />

        <Textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Tell me about your project"
          required
        />

        <Btn type="submit">Send message</Btn>
      </Form>
    </Section>
  );
}
