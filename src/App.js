import React, {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./styles/app.css";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Language Programming" },
        { id: 2, title: "Python", body: "Language Programming" },
        { id: 3, title: "Ruby", body: "Language Programming" },
        { id: 4, title: "TypeScript", body: "Language Programming" },
        { id: 5, title: "Java", body: "Language Programming" }
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (!filter.sort) return posts;
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]) );
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
        }, [filter.query, sortedPosts]);


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (postToRemove) => {
        setPosts(posts.filter(post => post.id !== postToRemove.id));
    };

    return (
        <div className="App">
            <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts List 1"} />
        </div>
    );
}

export default App;