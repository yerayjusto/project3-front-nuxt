<template>
  <v-col v-if="restaurants.length > 1">
    <nuxt-link
      :to="{ params: { ...params }, name: 'restaurants-results' }"
      style="text-decoration: none; color: inherit"
    >
      <h5 v-if="$vuetify.breakpoint.xs">{{ restaurants.length }} PLAYAS >></h5>

      <h4 v-if="$vuetify.breakpoint.sm">{{ restaurants.length }} RESULTADOS >></h4>

      <h1 v-if="$vuetify.breakpoint.mdAndUp">
        {{ restaurants.length }} RESULTADOS >>
      </h1>
    </nuxt-link>
  </v-col>
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