<template>
  <div>
    <p>{{ affichageConditionnel() }}</p>
  </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciceCondition',
  data() {
    return {
    };
  },
  methods: {
    affichageConditionnel() {
      return Math.random() > 0.5 ? "Jambon" : "Fromage";
    }
  },
});
</script>

<style scoped lang="css">
</style>