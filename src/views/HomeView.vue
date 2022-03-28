<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <counter/>
<counter-Squared/>
<Buttons/>
  
  <input 
  v-model="colorCode"
  placeholder="Ender colour code" 
  type="text"/>
  </div>
</template>

<script>
 import Counter from '@/components/Counter'
 import CounterSquared from '@/components/CounterSquared'
 import Buttons from '@/components/Buttons'

export default {
  name: 'HomeView',
  components: { Counter, CounterSquared ,Buttons},
  computed:{
    colorCode:{
get(){
return this.$store.state.colorCode
},
    set(newValue){
this.$store.dis('setColorCode',newValue)
    } 
    }
  },

   
  
  
}
</script>

<style>
div {
margin-bottom: 10px;
}
.counter{
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width:100px;
  margin: 0 10px;
}
</style>

