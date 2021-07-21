<template>
  <v-card class="ma-auto" width="374" height="500"> 
    <nuxt-link :to="{ params: { id: place._id }, name: 'beach-details' }"
    style="text-decoration: none; color: inherit">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="250" :src="place.imageUrl"></v-img>

    <v-card-title>{{ place.name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ place.island }} - {{ place.municipality }}
      </div>

      <div>{{ place.description }}</div>
    </v-card-text>

    <!-- <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions> -->
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  name: "CardPlace",

  props: {
    place: {
      type: Object,
      required: true,
    },
  },
};
</script>