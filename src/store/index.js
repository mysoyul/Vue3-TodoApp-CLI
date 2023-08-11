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
        return arr
    }
}

export const store = createStore({
    plugins: process.env.NODE_ENV === 'development' ?
        [createLogger()] : [],
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addTodo(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        }, //addTodo
        removeTodo(state, payload) {
            const { todoItem, index } = payload
            localStorage.removeItem(todoItem.item);
            state.todoItems.splice(index, 1);
        },
        toggleTodo(state, payload) {
            const { todoItem: { item, completed }, index } = payload
            state.todoItems[index].completed = !completed
            localStorage.removeItem(item);
            localStorage.setItem(item, JSON.stringify(state.todoItems[index]));
        },
        clearTodo(state) {
            localStorage.clear()
            state.todoItems = []
        }
    },

})