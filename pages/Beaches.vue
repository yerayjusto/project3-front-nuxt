<template>
  <v-row>
    <v-col cols="12"
        class="d-flex justify-center col-sm-6 col-md-4 col-lg-3" v-for="(beach,idx) in beaches" :key="idx" >
        <CardPlace :place="beach"/>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name:'Beaches',
  data(){
    return{
      beaches:[]
    }
  },
  props: {
    filter: {
      type: Object,
      required:true
    }
  },

  // mounted() {
  //   BeachesService.getAllBeaches()
  //   .then(beaches =>{
  //          this.beaches = beaches.data
  //   } )
  //   .catch(err =>{
  //     console.error(err)
  //   })
  // }
}
</script>
