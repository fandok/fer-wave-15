import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import "./App.css";
import Navigation from "./components/navigation";

const App = () => (
  <>
    <Navigation />
    <div className="card Card">
      <img
        src="https://picsum.photos/300/200"
        className="card-img-top"
        alt="placeholder image"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>

    {/* <Card className={styles.Card}>
      <img alt="Sample" src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card‘s content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card> */}
  </>
);

export default App;
