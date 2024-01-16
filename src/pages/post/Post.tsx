import React from 'react';
import Button from "../../shared/button/Button";
import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Button>Назад</Button>
                <p className={styles.attention}>Вы просматриваете пост №1</p>
            </div>

            <div className={styles.post}>
                <h1 className={styles.title}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
                <p className={styles.body}>
                    quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas
                    totam nostrum rerum est autem sunt rem eveniet architecto
                </p>
            </div>
        </div>
    );
};

export default Post;
