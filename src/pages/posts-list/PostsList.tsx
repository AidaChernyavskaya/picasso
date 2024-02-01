import React, {useEffect, useRef, useState} from 'react';
import styles from './PostsList.module.css';
import {postAPI} from "../../entities/post/api/PostService";
import PostCard from "../../entities/post/PostCard";
import Loader from "../../shared/loader/Loader";
import {useInView} from "react-intersection-observer";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostsList = () => {
    const [postStart,setPostStart]=useState(0)
    const {data: posts, isLoading} = postAPI.useFetchAllPostsQuery({limit: 10, page: postStart});

    const {ref: lastPost, inView: inViewLastPost} = useInView({
        threshold: 0.7
    });

    const {ref: firstPost, inView: inViewFirstPost} = useInView({
        threshold: 0.5
    });

    useEffect(() => {
        if(inViewLastPost) {
            console.log('last');
            setPostStart((postStart) => postStart + 1)
        }
    }, [inViewLastPost]);

    useEffect(() => {
        if(inViewFirstPost) {
            console.log('first');
            setPostStart((postStart) => postStart > 0 ? postStart - 1 : 0);
        }
    }, [inViewFirstPost]);

    return (
        <div className={styles.posts}>
            <h1 className={styles.h1}>Посты на актуальные темы</h1>
            {isLoading && <Loader/>}
            <ul>
                {posts && posts.map((post, index, arr) => (
                    index === arr.length - 1 ? (
                        <li key={post.id} ref={lastPost}>
                            <PostCard
                                id={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        </li>
                    ) : index === 0 ? (
                        <li key={post.id} ref={firstPost}>
                            <PostCard
                                id={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        </li>
                    ) : (
                        <li key={post.id}>
                            <PostCard
                                id={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        </li>
                    )
                ))}
            </ul>
            <div style={{background: "red", width: 20, height: 20}}></div>
        </div>
    );
};

export default PostsList;
