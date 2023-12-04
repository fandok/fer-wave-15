import { Alert, Button, Container } from "reactstrap";
import styles from "./styles.module.css";
import { useState } from "react";

const AppAlternative = () => {
  const [danger, setDanger] = useState(false);

  return (
    <Container className={styles.container}>
      <Container className="text-center">
        <Button
          className="mb-4"
          color="danger"
          onClick={() => {
            setDanger(true);
          }}
        >
          Hati-Hati !
        </Button>
        {danger && <Alert color="danger">Sudah dibilang hati-hati !</Alert>}
      </Container>
    </Container>
  );
};

export default AppAlternative;
