<template>
  <v-col v-if="beaches.length > 1" class="d-flex justify-center" xs="6" sm="6" md="4" lg="4" xl="4">
    <nuxt-link
      :to="{ params: { ...params }, name: 'beaches-results' }"
      style="text-decoration: none; color: inherit"
    >
      <h5 v-if="$vuetify.breakpoint.xs">{{ beaches.length }} PLAYAS >></h5>

      <h4 v-if="$vuetify.breakpoint.sm">{{ beaches.length }} RESULTADOS >></h4>

      <h1 v-if="$vuetify.breakpoint.mdAndUp">
        {{ beaches.length }} RESULTADOS >>
      </h1>
    </nuxt-link>
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