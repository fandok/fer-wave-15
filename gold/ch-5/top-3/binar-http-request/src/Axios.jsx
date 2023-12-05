import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";

const Post = ({ title }) => {
  return <h5>{title}</h5>;
};

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios example
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setPosts(response.data);
    });

    // fetch example
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((result) => setPosts(result));
  }, []);

  return (
    <Container className="p-4">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} />
      ))}
    </Container>
  );
};

export default Home;
