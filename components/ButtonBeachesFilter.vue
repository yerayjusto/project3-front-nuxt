<template>
<v-row align="center" justify="center">
      <v-col v-if="beaches.length > 1" justify="center">
        <nuxt-link
      :to="{ params: { ...params }, name: 'beaches-results' }"
      style="text-decoration: none; color: inherit"
    >
        <p v-if="$vuetify.breakpoint.xs">

          {{ beaches.length }} RESULTADOS >>
        </p>

        <h1 v-else>
          {{ beaches.length }} RESULTADOS >>
        </h1>
      </nuxt-link>
      </v-col>
</v-row>
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