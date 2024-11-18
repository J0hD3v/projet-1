<script setup>
import MultipleDataTypes from '@/components/MultipleDataTypes.vue';
import TaskList from '../components/TaskList.vue';
import ExerciceCondition from '@/components/exercice-condition.vue';
</script>

<template>
  <div class="d-flex flex-column align-items-center min-vh-100 mt-5">
    <h1 class="m-4">Home View</h1>
    <TaskList />
    <MultipleDataTypes />
    <ExerciceCondition />
  </div>
</template>
