<template>
  <v-card width="350" height="500">
    <nuxt-link
      :to="{ params: { id: place._id }, name: nameDetailsPage }"
      style="text-decoration: none; color: inherit"
    >
      <v-img height="250" :src="place.imageUrl"></v-img>

      <v-card-title>{{ place.name }}</v-card-title>
      <v-row class="ms-3">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div v-if="$vuetify.breakpoint.mdAndUp" class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <v-card-subtitle>
        {{ place.island }} - {{ place.municipality }}
      </v-card-subtitle>

      <v-card-text style="overflow-x: hidden;">
        {{ place.description }}
      </v-card-text>
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  name: 'CardPlace',

  props: {
    place: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    nameDetailsPage: '',
  }),

  mounted(){
    if (this.place.placeType === 'beaches') this.nameDetailsPage = 'beach-details'
    if (this.place.placeType === 'restaurants') this.nameDetailsPage = 'restaurant-details'
    if (this.place.placeType === 'viewpoints') this.nameDetailsPage = 'viewpoint-details'
    if (this.place.placeType === 'museums') this.nameDetailsPage = 'museum-details'
  }


}
</script>
<style scoped>

@media (min-width: 200px) and (max-width: 600px) {
  #place-vcard {
    height: 220px;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  #place-vcard {
    height: 350px;
  }
  .text-desc {
    display: none;
  }
}
@media (min-width: 800) {
  #v-card-text {
    white-space: nowrap;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>