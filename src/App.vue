<template>
  <div class="container" id="app">
    <nav>
      <h1>Vue App</h1>

      <ul>
        <li>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/counter">Counter</router-link>
          <router-link to="/todo">Todo</router-link>
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </nav>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  max-width: 1200px;
  margin: auto;
}
</style>
