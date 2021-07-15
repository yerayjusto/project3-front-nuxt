<template>
  <v-col class="d-flex justify-center col-sm-4 col-md-4 col-lg-4">
    <nuxt-link
      :to="{ params: { ...params }, name: 'beaches-results' }"
      style="text-decoration: none; color: inherit"
    >
      <v-btn v-if="$vuetify.breakpoint.xs" small class="success">
        <v-icon dark>mdi-white-balance-sunny</v-icon>
        &nbsp;
        {{ beaches.length }} PLAYAS
      </v-btn>
      <v-btn v-else small class="success"> {{ beaches.length }} PLAYAS</v-btn>
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