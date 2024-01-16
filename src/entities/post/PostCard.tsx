import React, {FC} from 'react';
import styles from "./PostCard.module.css";
import Button from "../../shared/button/Button";
import {Link} from "react-router-dom";

export interface PostCardProps {
    id: number;
    title: string;
    body: string;
}

const PostCard: FC<PostCardProps> = ({id, title, body}) => {
    return (
        <div className={styles.post}>
            <h2 className={styles.header}>{id}. {title}</h2>
            <p className={styles.text}>{body}</p>
            <Link to={`/posts/${id}`}><Button>Просмотр</Button></Link>
        </div>
    );
};

export default PostCard;
