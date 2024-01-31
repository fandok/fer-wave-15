// src/components/Person.js
import { Button, Card, Col, Row } from "react-bootstrap";

const Person = ({ name, address, phoneNumber, photo }) => (
  <Card className="container-fluid p-4 text-center">
    <Card.Img variant="top" src={photo} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <Row className="my-2">
          <Col>
            {address}, {phoneNumber}
          </Col>
        </Row>
      </Card.Text>
      <Button variant="danger">Remove</Button>
    </Card.Body>
  </Card>
);

export default Person;
