import { defineStore } from 'pinia'
import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com'

export const usePostsStore = defineStore('posts',  {
  state: (): IState => ({
    posts: [],
    users: []
  }),

  actions: {
    async fetchPosts (id?: number) {
      try {
        const url = id ? `/users/${ id }/posts` : '/posts'

        const { data } = await axios.get<IPost[]>(API_URL + url);

        this.posts = data || [];
      } catch (error: unknown) {
        this.posts = [];
      }
    },

    async fetchUsers () {
      try {
        const { data } = await axios.get<IUser[]>(API_URL + '/users');

        this.users = data || [];
      } catch (error: unknown) {
        this.users = [];
      }
    }
  }
})
