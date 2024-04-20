import React from "react";
import { Card } from "react-bootstrap";

export default function PrivelegesItem({ title, descr, link }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{descr}</Card.Subtitle>
        <Card.Link href={link}>Перейти</Card.Link>
      </Card.Body>
    </Card>
  );
}
