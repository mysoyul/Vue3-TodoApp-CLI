import { createStore, createLogger } from "vuex"

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const itemJson = localStorage.getItem(localStorage.key(i))
                if (itemJson) {
                    arr.push(JSON.parse(itemJson))
                }
            }
        }
        return arr;
    }
}

export const store = createStore({
    plugins: process.env.NODE_ENV === 'development' ?
        [createLogger()] : [],
    state: {
        todoItems: storage.fetch()
    },
    mutations: {

    },

})