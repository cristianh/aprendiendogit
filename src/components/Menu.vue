<template>
  <div>
    
    <div>
      {{nombre}}
  <b-nav >
    <b-nav-item active><router-link to="/">Home</router-link>
    <b-nav-item><router-link to="/Botones">Botones</router-link></b-nav-item>
    </b-nav-item>
    <b-nav-item><router-link to="/Usuarios">Usuarios</router-link></b-nav-item>
    <b-nav-item><router-link to="/Registro">Registrase</router-link></b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
  
</div>
  </div>
</template>

<script>


export default {
  name:'Menu',
  props:{
    nombre:String
  },
  data(){
    return{
      textoopcion1:'home'
    }
  },
  methods:{
    
  },
  mounted:function(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
