<template>
  <v-col
    v-if="beaches.length > 0"
    class="d-flex px-lg-15"
    cols="6"
    xs="6"
    sm="6"
    md="4"
  >
    <nuxt-link
      :to="{ query: { ...params }, name: 'places-results' }"
      style="text-decoration: none; color: inherit"
    >
      <h4 v-if="$vuetify.breakpoint.xs">{{ beaches.length }} RESULTADOS >></h4>

      <h3 v-if="$vuetify.breakpoint.sm">{{ beaches.length }} RESULTADOS >></h3>

      <h1 v-if="$vuetify.breakpoint.mdAndUp">
        {{ beaches.length }} RESULTADOS >>
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
    beaches: {
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