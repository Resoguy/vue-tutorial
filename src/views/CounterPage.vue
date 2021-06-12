<template>
    <div>
        <h1>Counter Page</h1>
        <Counter />
    </div>
</template>

<script>
import Counter from '@/components/Counter.vue';

    export default {
        name: 'CounterPage',
        components: {
            Counter
        }
    }
</script>

<style lang="scss" scoped>

</style>