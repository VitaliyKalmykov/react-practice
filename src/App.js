import React, {useRef, useState} from "react";
import Counter from "./components/counter";
import "./styles/app.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Language Programming"},
        {id: 2, title: "Python", body: "Language Programming"},
        {id: 3, title: "Ruby", body: "Language Programming"},
        {id: 4, title: "TypeScript", body: "Language Programming"},
        {id: 5, title: "Java", body: "Language Programming"}

    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (postToRemove) => {
        setPosts(posts.filter(post => post.id !== postToRemove.id))
    }

  return (
      <div className="App">
        {/*<Counter/>*/}
          <PostForm create={createPost}/>
          {posts.length !== 0 ? <PostList remove={removePost} posts={posts} title={"Posts List 1"} />
              :
              <div>
                  <h1 style={{textAlign: "center"}}>Post's didn't found.</h1>
              </div> }

      </div>
  );
}

export default App;
