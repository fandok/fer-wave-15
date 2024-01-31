import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

import PersonAPI from "../assets/persons";
import Person from "./PersonComponent";

class PersonContainer extends Component {
  componentDidMount() {
    PersonAPI.all().then((persons) =>
      this.props.dispatch({
        type: "person/INIT",
        payload: persons,
      }),
    );
  }

  createCard = (personProps) => (
    <Col xs={4}>
      <Person {...personProps} />
    </Col>
  );

  createRow = (rows) => (
    <Row key={`${Math.random()}-${Date.now()}`}>
      {rows.map((i) => this.createCard(Object.assign(i, { key: i.id })))}
    </Row>
  );

  render() {
    const { data } = this.props;
    const contents = [];

    for (let i = 0; i < data.length; i += 3) {
      contents.push(data.slice(i, i + 3));
    }

    return (
      <Container fluid className="p-4">
        {contents.map((i) => this.createRow(i))}
      </Container>
    );
  }
}

/* Fungsi ini kita pakai untuk melakukan
 * mapping dari store ke props pada component
 * */
const mapStateToProps = (state) => ({
  data: state.persons,
});

const PersonContainerConnect = connect(mapStateToProps)(PersonContainer);

export default PersonContainerConnect;
