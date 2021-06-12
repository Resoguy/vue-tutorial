<template>
    <div>
        <input type="text" placeholder="Enter a text..." v-model="text" />
        <h3>{{reverseText}}</h3>
    </div>
</template>

<script>
    export default {
        name: 'Computed',
        data: () => ({
            text: ''
        }),

        computed: {
            reverseText() {
                return this.text.split('').reverse().join('-');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>