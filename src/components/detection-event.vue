<template>
  <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <form v-on:submit.prevent>
              <input v-on:input="capterInput($event)" type="text">
              <button class="btn btn-primary" type="submit">Envoyer</button>
          </form>
          <h3 class="mx-3">{{uneString}}</h3>
        </div>
    </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DetectionEvent',
  data() {
    return {
      uneString: 'Hello'
    };
  },
  methods: {
    capterInput(event){
      console.log(event);
      this.uneString = event.target.value;
    }
  },
});
</script>

<style scoped lang="css">
</style>