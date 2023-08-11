<template>
    <div class="inputBox shadow">
        <input type="text" :value="newTodoItem" @input="handleInput" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <MyModal v-show="showModal" @close="showModal = false">
            <template v-slot:header>
                <h3>
                    경고!
                    <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
                </h3>
            </template>
            <template v-slot:body>
                <div>할일을 입력하세요!</div>
            </template>
        </MyModal>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MyModal from './common/MyModal.vue'
import { useStore } from "vuex"

const store = useStore()

const showModal = ref(false)

const newTodoItem = ref("")

//input:todo 이름을 갖는 Event 정의
const emit = defineEmits(["input:todo"])

const handleInput = (event) => {
    const todoText = event.target.value
    if (!todoText) return
    //Event 발생시킴
    emit('input:todo', todoText)
    newTodoItem.value = todoText
}
const addTodo = () => {
    if (newTodoItem.value !== "") {
        const todoItemStr = newTodoItem.value
        const itemObj = { completed: false, item: todoItemStr } 
        //actions 객체내의 addTodo 함수 호출하기
        store.dispatch("addTodo", itemObj)        
        clearInput()
    } else {
        showModal.value = !showModal.value
    }
}
const clearInput = () => {
    newTodoItem.value = ""
}

</script>

<style scoped>
i,
span {
    cursor: pointer;
}

input:focus {
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
    width: 80%;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color: white;
    vertical-align: middle;
}

.closeModalBtn {
    color: #42b983;
}
</style>