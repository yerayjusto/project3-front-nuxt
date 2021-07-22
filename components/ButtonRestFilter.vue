<template>
<v-row align="center" justify="center">
      <v-col v-if="restaurants.length > 1" justify="center">
        <nuxt-link
      :to="{ params: { ...params }, name: 'restaurants-results' }"
      style="text-decoration: none; color: inherit"
    >
        <p v-if="$vuetify.breakpoint.xs">

          {{ restaurants.length }} RESULTADOS >>
        </p>

        <h1 v-else>
          {{ restaurants.length }} RESULTADOS >>
        </h1>
      </nuxt-link>
      </v-col>
</v-row>
</template>

<script>
export default {
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
    params: {
      type: Object,
      default: null,
    },
  },
}
</script>