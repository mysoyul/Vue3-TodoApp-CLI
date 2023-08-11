import http from "@/common/http-common"

export const modulePost = {
    namespaced: true,
    state: () => ({
        posts: [],
        post: { id: 0, text: '' }
    }),
    mutations: {
        setPosts(state, items) {
            state.posts = items;
        },
        setPost(state, item) {
            state.post = item;
        },
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
        getPost(state) {
            return state.post;
        },
    },
    actions: {
        loadPosts({ commit }) {
            http
                .get(`/posts`)
                .then((res) => res.data)
                .then((items) => commit("setPosts", items))
                .catch((err) => console.error(err));
        },
        loadPost({ commit }, payload) {
            http
                .get(`/posts/${payload.id}`)
                .then((res) => res.data)
                .then((item) => commit("setPost", item))
                .catch((err) => console.error(err));
        },
        removePost({ commit }, id) {
            http
                .delete(`/posts/${id}`)
                .then((res) => res.data)
                .then((items) => commit("setPosts", items))
                .catch((err) => console.error(err));
        },
        addPost({ commit }, payload) {
            http
                .post(`/posts`, payload)
                .then((res) => res.data)
                .then((items) => commit("setPosts", items))
                .catch((err) => console.error(err));
        },
    }
}  