<template>
    <div>
        <input v-model="color" type="text" placeholder="Enter a valid color..." />

        <h1 
            :class="{active: isActive}"
            :style="{color: color}"
            v-if="!isTitleHidden">
            Classes Title
        </h1>

        <h1 v-else>...Loading</h1>

        <button @click="toggleColor">Toggle Color</button>
        <button @click="toggleTitle">Toggle Element</button>
    </div>
</template>

<script>
    export default {
        name: 'Classes',
        data: () => ({
            isActive: false,
            color: 'slateblue',
            isTitleHidden: false
        }),
        methods: {
            toggleColor() {
                this.isActive = !this.isActive;
            },

            toggleTitle() {
                this.isTitleHidden = !this.isTitleHidden;
            }
        }
    }
</script>

<style lang="scss" scoped>
.active {
    color: blue;
}

</style>