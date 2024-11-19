<script setup>
import MultipleDataTypes from '@/components/MultipleDataTypes.vue';
import TaskList from '../components/TaskList.vue';
import ExerciceCondition from '@/components/exercice-condition.vue';
import ExerciceDataBinding from '@/components/exercice-dataBinding.vue';
import Compteur from '@/components/compteur.vue';
import DetectionEvent from '@/components/detection-event.vue';
import ExerciceEventBinding from '@/components/exercice-eventBinding.vue';
import ExerciceVModel from '@/components/exercice-v-model.vue';
</script>

<template>
  <div class="d-flex flex-column align-items-center min-vh-100 mt-5">
    <h1 class="m-4">Home View</h1>
    <TaskList />
    <MultipleDataTypes />
    <ExerciceCondition />
    <ExerciceDataBinding />
    <Compteur />
    <DetectionEvent />
    <ExerciceEventBinding />
    <ExerciceVModel />
  </div>
</template>
