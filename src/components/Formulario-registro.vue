 
<template>
  <div>
      <vs-row>
  <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-lg="12">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="formgrup"
                    label="Titulo:"
                    label-for="formgrup"
                    description="Tirulo del evento.">
        <b-form-input id="titulo"
                      type="text"
                      v-model="form.titulo"
                      required
                      placeholder="Titulo evento">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Descripcion:"
                    label-for="Descripcion del evento">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Food:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">chao</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </vs-col>
</vs-row>
    {{$data}}
  </div>
</template>

<script>
export default {
  name:'Formulario-registro',
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
</style>
 