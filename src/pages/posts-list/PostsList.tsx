import React, {useEffect, useState} from 'react';
import styles from './PostsList.module.css';
import PostService from "../../entities/post/api/PostService";
import Button from "../../shared/button/Button";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostsList = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        fetchSpecialists();
    }, [limit, page]);

    async function fetchSpecialists () {
        setTimeout(async () => {
            try {
                const response = await PostService.getAll(limit, page);
                setPosts(response.data);
            } catch (err) {
                console.log(err);
            }
        },)
    }


    return (
        <div className={styles.posts}>
            <h1 className={styles.h1}>Посты на актуальные темы</h1>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <h2 className={styles.header}>{post.id}. {post.title}</h2>
                    <p className={styles.text}>{post.body}</p>
                    <Button>Просмотр</Button>
                </div>
            ))}
        </div>
    );
};

export default PostsList;
