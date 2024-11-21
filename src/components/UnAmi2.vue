<template>
    <article class="d-flex flex-column m-2 p-4 bg-secondary">
      <h6 class="bg-light">{{ leNom }}</h6>
      <h5>{{ premium == 1 ? "Ami Premium" : "Ami Nul" }}</h5>
      <button @click="switchDetailsVisible" class="bg-warning">{{ detailsVisible==false ? 'Voir Détails' : 'Masquer Détails' }}</button>
	  <button @click="afficherPremium" class="btn btn-danger mb-1">Premium ?</button>
      <section v-if="detailsVisible" class="bg-light">
          <h6>{{ lePhone }}</h6>
          <h6>{{ leMail }}</h6>
      </section>
    </article>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'UnAmi2',
	/* components: {
	}, */
	props: {
		id: {
		type: String,
		required: true,
		},
		leNom: {
		type: String,
		required: true,
		},
		lePhone: {
		type: String,
		required: true,
		},
		leMail: {
		type: String,
		required: true,
		},
		premium: {
		type: Boolean,
		required: false,
		default: '0',
		validator: function(value){return value===true || value===false}	// verification que la valeur de "premium" est soit true soit false
		},
	},
	emits: {
		// verification que l'event 'premium-event' emet bien quelque chose non null
		'premium-event': function (value){
            if(value){
                return true;
            }
            else{
                console.warn('C\'est la catastrophe !!!!!!');
                console.error('ON A PAS DE ID');
                return false;
            }
        }
	},
	data() {
		return {
		detailsVisible: false,
		//premiumData: this.premium,
		};
	},
	methods: {
		afficherPremium() {
			//this.premiumData = !this.premiumData;
			this.$emit('premium-event',this.id);
		}
	},
	computed: {
		switchDetailsVisible() {
		this.detailsVisible = !this.detailsVisible;
		}
	},
});
</script>

<style scoped lang="css">
article>* {
text-align: center;
}
</style>