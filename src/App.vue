<template>
  <div class="app">
    <Menu />
    <Dispositivos />
    <!-- <Aplicaciones /> -->
  </div>
</template>

<script>
import Dispositivos from './components/dispositivos.vue'
import Menu from './components/menu.vue'
// import Aplicaciones from './components/aplicaciones.vue'

export default {
  name: 'App',
  components: {
    Dispositivos,
    Menu,
    // Aplicaciones,
  },
  data() {
    return {
      values:{
        type:'hola',
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
