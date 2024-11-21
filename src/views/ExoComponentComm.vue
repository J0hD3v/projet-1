<script setup>
import ActiveUser from '@/components/activeUser.vue';
import UserData from '@/components/userData.vue';

let newUser = {
  nom: "Luigi",
  age: "40",
}

function majData(newNom,newAge) {
  console.log("submit reçu");
  newUser.nom = newNom;
  newUser.age = newAge;
  console.log(newUser);
  return true
}

</script>

<template>
  <ActiveUser v-bind:leNom="newUser.nom" v-bind:leAge="newUser.age"/>
  <UserData @new-data="majData" />
</template>
