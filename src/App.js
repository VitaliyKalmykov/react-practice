import React, {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./styles/app.css";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Language Programming" },
        { id: 2, title: "Python", body: "Language Programming" },
        { id: 3, title: "Ruby", body: "Language Programming" },
        { id: 4, title: "TypeScript", body: "Language Programming" },
        { id: 5, title: "Java", body: "Language Programming" }
    ]);

    const [searchQuery, setSearchQuery] = useState("");

    const [selectedSort, setSelectedSort] = useState('')

    const sortedPosts = useMemo(() => {
        console.log("work");
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]) )
        }
        return posts;
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
   return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, sortedPosts]);

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (postToRemove) => {
        setPosts(posts.filter(post => post.id !== postToRemove.id));
    };

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <div>
                <MyInput placeholder="Search..." value={searchQuery} onChange={event => setSearchQuery(event.target.value)} />
               <MySelect
                   value={selectedSort}
                   onChange={sortPosts}
                   defaultValue={"Sort by:"}
                   options={[
                       {
                       value: "title", name: 'By title'
                   },
                       {
                           value: 'body', name: 'By description'
                       }]}
               />
            </div>
            {sortedAndSearchedPosts.length ? (
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts List 1"} />
            ) : (
                <div>
                    <h1 style={{ textAlign: "center" }}>Posts not found.</h1>
                </div>
            )}
        </div>
    );
}

export default App;