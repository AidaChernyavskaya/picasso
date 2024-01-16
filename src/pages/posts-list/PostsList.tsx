import React from 'react';
import styles from './PostsList.module.css';

const PostsList = () => {
    return (
        <div className={styles.posts}>
            <h1 className={styles.h1}>Посты на актуальные темы</h1>
            <div className={styles.post}>
                <h2 className={styles.header}>
                    1. sunt aut facere repellat provident occaecati excepturi optio reprehenderit
                </h2>
                <p className={styles.text}>
                    quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut
                    quas totam nostrum rerum est autem sunt rem eveniet architecto
                </p>
                <button className={styles.button}>Просмотр</button>
            </div>
        </div>
    );
};

export default PostsList;
