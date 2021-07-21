<template>
  <nuxt-link
    :to="{ params: { id: place._id }, name: nameDetailsPage }"
    style="text-decoration: none; color: inherit"
  >
    <v-card class="rounded-xl">
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="place.imageUrl"></v-img>
        </v-avatar>
        <div>
          <v-card-title class="text-h5">{{ place.name }}</v-card-title>

          <v-card-subtitle>{{ place.description }}</v-card-subtitle>
        </div>
      </div>
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