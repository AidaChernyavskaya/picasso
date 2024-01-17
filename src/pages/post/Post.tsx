import React from 'react';
import Button from "../../shared/button/Button";
import styles from './Post.module.css';
import {postAPI} from "../../entities/post/api/PostService";
import {useNavigate} from "react-router-dom";
import Loader from "../../shared/loader/Loader";

export const getPostId = () => {
    const pathname = window.location.pathname;
    return Number(pathname.split('/')[2]);
}


const Post = () => {
    const {data: post, isLoading} = postAPI.useGetByIdQuery(getPostId());
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Button onClick={() => navigate(-1)}>Назад</Button>
                <p className={styles.attention}>Вы просматриваете пост №{post?.id}</p>
            </div>
            {isLoading
            ? <Loader/>
            : <div className={styles.post}>
                    <h1 className={styles.title}>{post?.title}</h1>
                    <p className={styles.body}>{post?.body}</p>
              </div>
            }
        </div>
    );
};

export default Post;
