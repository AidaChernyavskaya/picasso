import axios from "axios";
import {IPost} from "../../../pages/posts-list/PostsList";

export default class PostService {
    static async getAll(limit=10, page=1) {
        return await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }

    static async getById(id: number) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }
}