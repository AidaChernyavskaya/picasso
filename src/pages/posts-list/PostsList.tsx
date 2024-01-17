import React from 'react';
import styles from './PostsList.module.css';
import {postAPI} from "../../entities/post/api/PostService";
import PostCard from "../../entities/post/PostCard";
import Loader from "../../shared/loader/Loader";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostsList = () => {
    const {data: posts, isLoading} = postAPI.useFetchAllPostsQuery(10);

    return (
        <div className={styles.posts}>
            <h1 className={styles.h1}>Посты на актуальные темы</h1>
            {isLoading && <Loader/>}
            {posts && posts.map((post) => (
                <PostCard id={post.id} title={post.title} body={post.body} key={post.id}/>
            ))}
        </div>
    );
};

export default PostsList;
