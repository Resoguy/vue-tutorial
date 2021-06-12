<template>
    <div class="counter">
        <h1>Counter Widget</h1>
        <h2>Count: {{count}}</h2>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        data: () => ({
            count: 0
        }),

        methods: {
            decrement() {
                this.count--;
            },

            reset() {
                this.count = 0;
            },

            increment() {
                this.count++;
            }
        }
    }
</script>

<style lang="scss" scoped>
.counter {
    background-color: tomato;
    color: white;
}
</style>