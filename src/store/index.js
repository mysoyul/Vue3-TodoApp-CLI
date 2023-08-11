import { createStore, createLogger } from "vuex"
import { moduleTodo } from './modules/moduleTodo';
import { modulePost } from './modules/modulePost';

export const store = createStore({
    plugins: process.env.NODE_ENV === 'development' ?
        [createLogger()] : [],
    modules: {
        moduleTodo,
        modulePost
    }
})