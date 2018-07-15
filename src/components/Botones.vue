<template>
  <div>
    <button :class="styleboton"><slot name="boton1">Boton texto 1</slot></button>
    <button :class="styleboton"><slot name="boton2">Boton texto 2</slot></button>
    <button :class="styleboton"><slot name="boton3">Boton texto 3</slot></button>
  </div>
</template>

<script>
export default {
  name:'Botones',
  props:['styleboton'],
  data() {
    return {
      name: '',
      actionSheetVisible: false,
      colors: ['Red', 'Green', 'Blue'],
      checkedColors: ['Green', 'Blue']
    };
  }
};
</script>

<style scoped>

</style>

