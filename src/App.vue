<template>
  <div id="app">
    <img src="./assets/mainLogo.jpg" @click="moveToMain()"></img>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    moveToMain: function(){
      this.$router.replace({ name: 'main' });    
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
