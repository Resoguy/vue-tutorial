<template>
    <div class="card">
        <h1>{{title}}</h1>
        <button @click="handleSomething">Do something</button>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String
    },

    methods: {
        handleSomething() {
            this.$emit('complete', 424242424);
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid slategray;
    border-radius: 4px;
    padding: 20px;
}
</style>