import React, {useEffect, useState} from 'react';
import styles from './PostsList.module.css';
import PostService from "../../entities/post/api/PostService";
import PostCard from "../../entities/post/PostCard";

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
                <PostCard id={post.id} title={post.title} body={post.body} key={post.id}/>
            ))}
        </div>
    );
};

export default PostsList;
