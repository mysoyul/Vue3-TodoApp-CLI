<template>
    <div class="inputBox shadow">
        <input type="text" :value="newTodoItem" @input="handleInput" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const newTodoItem = ref("")

//input:todo 이름을 갖는 Event 정의
const emit = defineEmits(["input:todo"])

const handleInput = (event) => {
    const todoText = event.target.value
    if (!todoText) return
    //Event 발생시킴
    emit("input:todo", todoText)
    newTodoItem.value = todoText
}
const addTodo = () => {
    if (newTodoItem.value !== "") {
        const todoItem = newTodoItem.value
        localStorage.setItem(todoItem, todoItem)
        clearInput()
    }
}
const clearInput = () => {
    newTodoItem.value = ""
}

</script>

<style scoped>
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
}</style>