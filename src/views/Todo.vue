<template>
    <div>
        <h1>Todo</h1>
        <div class="todo-form">
            <form @submit.prevent="addTodo">
                <div class="form-group">
                    <label for="todo-title">
                        Todo Title
                    </label>

                    <input 
                        id="todo-title" 
                        type="text" 
                        placeholder="Enter a todo..."
                        v-model="todoTitle" />
                </div>

                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
        <div class="todos-wrapper">
            <div 
                class="todos-card"
                v-for="todo of storeTodos" :key="todo.id">
                <h2>{{todo.title}} => {{todo.completed}}</h2>
                <button @click="deleteTodo(todo.id)">Del</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Todo',
        data: () => ({
            todoTitle: ''
        }),
        computed: {
            storeTodos() {
                return this.$store.state.todos;
            }
        },
        methods: {
            addTodo() {
                this.$store.commit('addTodo', {todoTitle: this.todoTitle});
            },

            deleteTodo(todoId) {
                this.$store.commit('deleteTodo', {todoId});
            }
        }
    }
</script>

<style lang="scss" scoped>
.todos-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>