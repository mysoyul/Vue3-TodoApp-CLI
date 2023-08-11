<template>
    <div>
        <header>
            <h2>TODO it! ({{ mode }})</h2>
        </header>
    </div>
</template>

<script>
export default {
    setup() {
        const mode = process.env.VUE_APP_TITLE
        return {mode}
    }
}
</script>

<style scoped>
h2 {
    color: #2F3852;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>