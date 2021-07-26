<template>
  <v-col v-if="restaurants.length > 0" class="d-flex px-lg-15" cols="6" xs="6" sm="6" md="4">
    <nuxt-link
      :to="{ params: { ...params }, name: 'restaurants-results' }"
      style="text-decoration: none; color: inherit"
    >
      <h4 v-if="$vuetify.breakpoint.xs">{{ restaurants.length }} RESULTADOS >></h4>

      <h3 v-if="$vuetify.breakpoint.sm">{{ restaurants.length }} RESULTADOS >></h3>

      <h1 v-if="$vuetify.breakpoint.mdAndUp">
        {{ restaurants.length }} RESULTADOS >>
      </h1>
    </nuxt-link>
  </v-col>
  <v-col v-else class="d-flex px-lg-15" cols="6" xs="6" sm="6" md="4">
    <h4 v-if="$vuetify.breakpoint.xs">SIN RESULTADOS</h4>

    <h3 v-if="$vuetify.breakpoint.sm">SIN RESULTADOS</h3>

    <h1 v-if="$vuetify.breakpoint.mdAndUp">SIN RESULTADOS</h1>
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