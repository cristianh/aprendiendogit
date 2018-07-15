<template>
  <div id="app">
    <Botones styleboton="btn btn-info">
      <template slot="boton1">
        Boton1
      </template>
      <template slot="boton2">
        Boton2
      </template>
      <template slot="boton3">
        Boton3
      </template>
    </Botones>
    <router-view></router-view>
  </div>
</template>

<script>
import Formulario from './components/Formulario-registro.vue'
import Menu from './components/Menu.vue'
import Botones from './components/Botones.vue'


export default {
  name: 'app',
  components: {
    Formulario,
    Menu,
    Botones
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
