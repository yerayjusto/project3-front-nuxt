<template>
  <v-col class="d-flex justify-center col-sm-4 col-md-4 col-lg-4">
    <nuxt-link
      :to="{ params: { ...params }, name: 'restaurants-results' }"
      style="text-decoration: none; color: inherit"
    >
      <v-btn v-if="$vuetify.breakpoint.xs" small class="success" width="130">
        <v-icon dark>mdi-food-variant</v-icon>
        &nbsp;
        {{ restaurants.length }} RESULTADOS
      </v-btn>
      <v-btn v-else class="success"> {{ restaurants.length }} RESULTADOS</v-btn>
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