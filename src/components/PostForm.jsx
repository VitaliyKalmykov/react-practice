import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm = ({create}) => {


    const [post, setPost] = useState({title : '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {...post,
            id: Date.now()};
        create(newPost)
        setPost({title : '', body: ''});
    }

    return (
        <form>
            <MyInput onChange={(event) => setPost({...post, title: event.target.value})} value={post.title}
                     type={"text"} placeholder={"Post name..."}/>
            <MyInput onChange={(event) => setPost({...post, body: event.target.value})} value={post.body} type={"text"}
                     placeholder={"Post body..."}/>
            <MyButton type={"button"} onClick={addNewPost}>Create post!</MyButton>
        </form>
    );
};

export default PostForm;