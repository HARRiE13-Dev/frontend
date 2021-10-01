import { createStore } from 'vuex'

export default createStore({
  //Obj Var - Declare Variable
  state: {
    counter: 0,
    showSideMenu : true,
  },
  // Function to Change Value in State
  mutations: {

    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    toggleSideMenu(state){
      state.showSideMenu = !state.showSideMenu
    },
  },
  actions: {
  },
  modules: {
  }
})
