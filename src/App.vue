<template>
  <div id="app">
    <Menu :nombre="textoopcion1"></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Formulario from './components/Formulario-registro.vue'
import Menu from './components/Menu.vue'


export default {
  name: 'app',
  components: {
    Formulario,
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
