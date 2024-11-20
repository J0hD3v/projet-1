<script setup lang="ts">
import MultipleDataTypes from '@/components/MultipleDataTypes.vue';
import TaskList from '../components/TaskList.vue';
import ExerciceCondition from '@/components/exercice-condition.vue';
import ExerciceDataBinding from '@/components/exercice-dataBinding.vue';
import Compteur from '@/components/compteur.vue';
import DetectionEvent from '@/components/detection-event.vue';
import ExerciceEventBinding from '@/components/exercice-eventBinding.vue';
import ExerciceVModel from '@/components/exercice-v-model.vue';
import BugPreComputed from '@/components/bug-pre-computed.vue';
import DebugComputed from '@/components/debug-computed.vue';
import ExerciceReactivite from '@/components/exercice-reactivite.vue';
import ExerciceStyleDynamic from '@/components/exercice-style-dynamic.vue';
import ExerciceStyleDynamic2 from '@/components/exercice-style-dynamic-2.vue';
import ExerciceFilmsList from '@/components/exercice-FilmsList.vue';
</script>

<template>
  <div class="d-flex flex-column align-items-center min-vh-100 mt-5">
    <h1>This is an about page</h1>
    <TaskList />
    <MultipleDataTypes />
    <ExerciceCondition />
    <ExerciceDataBinding />
    <Compteur />
    <DetectionEvent />
    <ExerciceEventBinding />
    <ExerciceVModel />
    <BugPreComputed />
    <DebugComputed />
    <ExerciceReactivite />
    <ExerciceStyleDynamic />
    <ExerciceStyleDynamic2 />
    <ExerciceFilmsList />
  </div>
</template>
