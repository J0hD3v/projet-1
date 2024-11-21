<script setup lang="ts">
import NewAmi from '@/components/NewAmi.vue';
import UnAmi2 from '../components/UnAmi2.vue';
import UnAmi from '../components/UnAmi.vue';

const tabAmis = [
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true,
    },
    {
        id: 'janine',
        name: 'Janine DeLavega',
        phone: '09876 543 221',
        email: 'janine@delavega.com',
        premium: false,
    },
    {
        id:'jojo',
        name:"jojoLeBarjo",
        phone:'123 12346 24',
        email:'jojo@barjo.com',
        premium: false,
    },
    {
        id:'kimonoSurUnFrigo',
        name:"Steven Seagal",
        phone:'+338765477',
        email:'steven@seagal.com',
        premium: false,
    }
];

function receiveEmit(leIdDansUnAmi) {
    alert(leIdDansUnAmi);
}

function ajouterAmi(name,phone,email) {
    console.log("submit reçu");
    const newAmiContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        premium: false,
    }
    tabAmis.push(newAmiContact);
    console.log(tabAmis);
}

</script>

<template>
  <div class="d-flex flex-column align-items-center min-vh-100 mt-5">
    <h1>Page amis</h1>
    <h3>Composant UnAmi {{ tabAmis[0].name }}</h3>
    <UnAmi leNom="MON NOM" lePhone="ceci est un numéro" leMail="ceci est une @email" premium="1" />
    <h3>Composant UnAmi2</h3>
    <UnAmi2 v-for="ami in tabAmis" v-bind:key="ami.id"
        v-bind:id="ami.id"
        v-bind:leNom="ami.name"
        v-bind:lePhone="ami.phone"
        v-bind:leMail="ami.email"
        v-bind:premium="ami.premium"
        
        v-on:premium-event="receiveEmit"
    />
    <h3>Composant NewAmi</h3>
    <NewAmi v-on:add-ami="ajouterAmi"/>
  </div>
</template>
