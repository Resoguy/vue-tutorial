import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
        {id: Math.random(), title: 'Todo Store 1', completed: false},
        {id: Math.random(), title: 'Todo 2', completed: true},
        {id: Math.random(), title: 'Todo 3', completed: false},
    ],
    users: null
  },

  actions: {

    async getUsers({commit}) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      console.log('Action DATA', data);
      commit('setUsers', {users: data});
    }
    
  },

  mutations: {
    addTodo(state, {todoTitle}) {
      const newTodo = {
        id: Math.random(),
        title: todoTitle,
        completed: false
      }

      state.todos.push(newTodo);
    },

    deleteTodo(state, {todoId}) {
      state.todos = state.todos.filter(todo => todo.id !== todoId);
    },

    setUsers(state, {users}) {
      state.users = users;
    }
  }
})

export default store;
