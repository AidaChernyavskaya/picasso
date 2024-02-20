import React, {FC, LegacyRef} from 'react';
import styles from "./PostCard.module.css";
import Button from "../../shared/button/Button";
import {Link} from "react-router-dom";
import {IPost} from "../../pages/posts-list/PostsList";
import cn from 'classnames';

export interface PostCardProps {
    post: IPost;
}

const getColorById = (id: number): string => {
    const colors = ['green', 'blue', 'pink', 'purple'];
    return colors[(id - 1)%4];
}

const PostCard: FC<PostCardProps> = ({post}) => {
    return (
        <div className={cn(styles.post, styles[getColorById(post.id)])}>
            <h2 className={styles.header}>{post.id}. {post.title}</h2>
            <p className={styles.text}>{post.body}</p>
            <Link to={`/posts/${post.id}`}><Button>Просмотр</Button></Link>
        </div>
    );
};

export default PostCard;
