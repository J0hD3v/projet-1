<script setup lang="ts">
import UnAmi from '../components/UnAmi.vue';
</script>

<template>
  <div class="d-flex flex-column align-items-center min-vh-100 mt-5">
    <h1>Page amis</h1>
    <UnAmi leNom="Jean" lePhone="0123456789" leMail="Jean@email.com" />
    <UnAmi leNom="Sebastien" lePhone="9876543210" leMail="Sebastien@email.com" />
    <UnAmi leNom="Cyril" lePhone="5555555555" leMail="Cyril@email.com" />
  </div>
</template>
