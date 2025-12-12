import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 900px;
  margin: 24px auto 40px;
  padding: 20px;
  border-radius: 12px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  background: transparent;
  color: inherit;
`;

const Textarea = styled.textarea`
  grid-column: 1 / -1;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  background: transparent;
  color: inherit;
  min-height: 120px;
`;

const Btn = styled.button`
  grid-column: 1 / -1;
  padding: 12px 14px;
  border-radius: 10px;
  border: 0;
  background: linear-gradient(90deg, var(--accent), #4ad7ff);
  color: #041022;
  font-weight: 700;
  cursor: pointer;
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
      <h3>Contact</h3>
      <p style={{ color: "var(--muted)" }}>
        Want to work together? Send a message — I reply quickly.
      </p>

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
