import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response);

    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export default Home;
