import React, {useEffect, useState} from "react";
import "../styles/app.css";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/Modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import {usePosts} from "../components/hooks/usePosts";
import {useFetching} from "../components/hooks/useFetching";



function Posts() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const [modal, setModal] = useState(false);

    const [totalPages, setTotalPages] = useState(0);

    const [limit, setLimit] = useState(10);

    const [page, setPage] = useState(1);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = (response.headers["x-total-count"]);
        setTotalPages(getPageCount(totalCount, limit));
    });

    console.log(totalPages)

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    useEffect(() => {
        fetchPosts(limit, page);
    }, [])

    const removePost = (postToRemove) => {
        setPosts(posts.filter(post => post.id !== postToRemove.id));
    };

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    }

    return (
        <div className="App" style={{width: "100%", padding: "20px 20px"}}>
            <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError &&
                <h1>Error! ${postError}</h1>}
            {isLoading ?
                <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                    <Loader/>
                </div>
                :
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts List 1"} /> }
            <Pagination
                page={page}
                totalPages={totalPages}
                changePage={changePage} />
        </div>
    );
}

export default Posts;