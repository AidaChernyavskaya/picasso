import PostsList from "../../pages/posts-list/PostsList";
import Post from "../../pages/post/Post";

interface IRoute {
    path: string,
    element: JSX.Element;
}

export const routes: Array<IRoute> = [
    {path: '/posts', element: <PostsList/>},
    {path: '/posts/:id', element: <Post/>},
]
