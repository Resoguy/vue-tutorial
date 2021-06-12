<template>
    <div>
        <h1>Users</h1>
        <hr>

        <div>
            <ul v-if="users">
                <li v-for="user of users" :key="user.id">
                    {{user.name}}
                </li>
            </ul>

            <div v-else>
                <h1>...Loading</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Users',

        computed: {
            users() {
                return this.$store.state.users;
            }
        },

        mounted() {
            this.fetchUsers()
        },

        methods: {
            async fetchUsers() {
                this.$store.dispatch('getUsers');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>