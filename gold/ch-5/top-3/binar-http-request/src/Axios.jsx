import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Container } from "reactstrap";

const URL = "https://jsonplaceholder.typicode.com/todos";

const Post = ({ title }) => {
  return <h5>{title}</h5>;
};

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios example
    axios.get(URL).then((response) => {
      console.log(response);
      setPosts(response.data);
    });

    // fetch example
    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((result) => setPosts(result));
  }, []);

  return (
    <Container className="p-4">
      {posts.map((post) => (
        <Fragment key={post.id}>
          <h1>{post.id}</h1>
          <Post title={post.title} />
        </Fragment>
      ))}
    </Container>
  );
};

export default Home;
