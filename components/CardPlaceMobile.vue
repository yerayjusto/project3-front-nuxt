<template>
  <nuxt-link
    :to="{ query: { id: place._id }, name: nameDetailsPage }"
    style="text-decoration: none; color: inherit"
  >
    <v-card class="rounded-lg">
      <v-row class="ma-0">
        <v-col cols="4"
          ><v-avatar size="80" rounded>
            <v-img :src="place.imageUrl"></v-img> </v-avatar
        ></v-col>
        <v-col cols="8"
          ><v-card-title style="word-break: normal" center>{{
            place.name
          }}</v-card-title>
        </v-col>
      </v-row>

      <v-row style="margin-top: 0">
        <v-col class="py-0">
          <v-card-subtitle id="card-subtitle" class="py-0">{{
            place.description
          }}</v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    place: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    nameDetailsPage: '',
  }),

  mounted() {
    if (this.place.placeType === 'beaches')
      this.nameDetailsPage = 'beach-details'
    if (this.place.placeType === 'restaurants')
      this.nameDetailsPage = 'restaurant-details'
  },
}
</script>
<style scoped>
#card-subtitle {
  text-overflow: ellipsis;
  overflow: hidden;
  height: 3.0em;
  white-space: nowrap;
}
</style>