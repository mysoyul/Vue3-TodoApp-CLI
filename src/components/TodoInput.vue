<template>
    <div>
        <input type="text" :value="newTodoItem" @input="handleInput">
        <button @click="addTodo">추가</button>
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

<style scoped></style>