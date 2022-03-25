<template>
  <div class="container">
    <div class="form">
        <h4 class="form__title">Ingresar información del dispositivo</h4>
        <form class="box box__form" action="" method="post">
            <label for="type"></label>
            <input v-model="values.type" class="box box__input" type="text" id="type" name="type" placeholder="Tipo de dispositivos"><br>

            <label for="model"></label>
            <input v-model="values.model" class="box box__input" type="text" id="model" name="model" placeholder="Modelo del dispositivo"><br>

            <label for="config"></label>
            <input v-model="values.config" class="box box__input" type="text" id="config" name="config" placeholder="Configuración (Si/No)"><br>

            <label for="lat"></label>
            <input v-model="values.lat" class="box box__input" type="text" id="lat" name="lat" placeholder="Latitud"><br>

            <label for="lon"></label>
            <input v-model="values.lon" class="box box__input" type="text" id="lon" name="lon" placeholder="Longitud"><br>

            <input @click="sendInfo" class="box button" type="button" value="Enviar">
        </form>
    </div>

    <div v-for="value in values" :key="value.id">
        <div class="box box__device">
            <h5 class="container__text">Tipo de dispositivo: {{value.type}} </h5>
            <h5 class="container__text">Modelo: {{value.model}} </h5>
            <h5 class="container__text">Configurado: {{value.config}} </h5>
            <h5 class="container__text">Latitud: {{value.lat}} </h5>
            <h5 class="container__text">Longitud: {{value.lon}} </h5>
            <button class="box button container__button" @click="deleteInfo(value._id)">Borrar</button>
            <button class="box button container__button">Editar</button>
        </div>
    </div>
  </div>
</template>

<script>
import PostService from '@/PostService.js';
import "@/assets/styles/global.css";

export default {
  name: 'Dispositivos',
  data() {
    return {
      values: {
        type: '',
        model: '',
        config: '',
        lat: '',
        lon:'',
      },
      error: '',
      text: ''
    }
  },
  async created() {
      try {
        this.values = await PostService.getPosts();
      }
      catch(err) {
        this.error = err.message;
      }
  },
  methods: {
      async sendInfo() {
        console.log(
          this.values
        );
        await PostService.insertPost(this.values);
        this.values = await PostService.getPosts();
        window.location.reload();
      },
      async deleteInfo(id) {
        await PostService.deletePost(id);
        this.values = await PostService.getPosts();
      },
  },
}
</script>
