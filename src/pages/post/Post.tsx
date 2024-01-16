import React, {useEffect, useState} from 'react';
import Button from "../../shared/button/Button";
import styles from './Post.module.css';
import {IPost} from "../posts-list/PostsList";
import PostService from "../../entities/post/api/PostService";
import {useNavigate} from "react-router-dom";

export const getPostId = () => {
    const pathname = window.location.pathname;
    return Number(pathname.split('/')[2]);
}


const Post = () => {
    const [post, setPost] = useState<IPost>();
    const navigate = useNavigate();

    useEffect(() => {
        fetchSpecialist();
    }, []);

    async function fetchSpecialist () {
        setTimeout(async () => {
            try {
                const response = await PostService.getById(getPostId());
                setPost(response.data);
            } catch (err) {
                console.log(err);
            }
        }, )
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Button onClick={() => navigate(-1)}>Назад</Button>
                <p className={styles.attention}>Вы просматриваете пост №{post?.id}</p>
            </div>

            <div className={styles.post}>
                <h1 className={styles.title}>{post?.title}</h1>
                <p className={styles.body}>{post?.body}</p>
            </div>
        </div>
    );
};

export default Post;
