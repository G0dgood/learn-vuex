import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:0,
    colorCode:'blue'
  },
  mutations: {
    decreaseCounter(state,randomNumber){
    state.counter -= randomNumber
    },
    increaseCounter(state, randomNumber){
      state.counter += randomNumber
    //  console.log('randomNumber',randomNumber) 
    },
setColorCode(state,newValue){
  state.colorCode = newValue 
}
},
  actions: {
    increaseCounter({commit}){
      // console.log('increaseCounter (action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(res =>{
        commit('increaseCounter', res.data)
        console.log(res)
      })
    },
    decreaseCounter({commit}){ 
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(res =>{
        commit('decreaseCounter', res.data) 

      })
    },
    setColorCode({commit}, newValue){
      commit('setColorCode',newValue)
    }
  },
  getters: {
    counterSquared(state){
       return state.counter * state.counter
    }
  }, 
  modules: {
  }
})
