<template>
  <article>
    <label for="input1">v-on + v-bind</label>
    <input id="input1" type="text" v-on:keyup="afficherUserName" v-bind:value="nameUser">
    <p>{{ nameUser }}</p>
  
    <label for="input2">v-model</label>
    <input id="input2" type="text" v-model="userName">
    <p>{{ userName }}</p>
  </article>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciceVModel',
  data() {
    return {
      nameUser: "",
      userName: ""
    };
  },
  methods: {
    afficherUserName(e) {
      this.nameUser = e.target.value;
    }
  },
});
</script>

<style scoped lang="css">
article {
  background-color: beige;
  margin: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>