<template>
  <v-container fluid class="choose">
    <v-row align="center" justify="center" class="mt-5">
      <v-col class="d-flex justify-center col-sm-4 col-md-4 col-lg-4">
        <nuxt-link
          :to="{ params: { ...params }, name: 'search-beach-1' }"
          style="text-decoration: none; color: inherit"
        >
          <v-btn
            v-if="$vuetify.breakpoint.xs"
            class="mx-2"
            fab
            dark
            small
            color="secondary"
          >
            <v-icon dark>mdi-arrow-left-bold</v-icon>
          </v-btn>
          <v-btn v-else small class="secondary">ATRAS</v-btn>
        </nuxt-link>
      </v-col>

      <ButtonBeachesFilter v-if="params" :params="params" :beaches="beaches" />

      <v-col class="d-flex justify-center col-sm-4 col-md-4 col-lg-4">
        <nuxt-link
          :to="{ params: { ...params }, name: 'search-beach-3' }"
          style="text-decoration: none; color: inherit"
        >
          <v-btn
            v-if="$vuetify.breakpoint.xs"
            class="mx-2"
            fab
            dark
            small
            color="primary"
          >
            <v-icon dark>mdi-arrow-right-bold</v-icon>
          </v-btn>
          <v-btn v-else small class="primary"> SIGUIENTE (SALTAR) </v-btn>
        </nuxt-link>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(type, idx) in types"
        :key="idx"
        class="px-lg-10"
        cols="6"
        xs="4"
        sm="4"
        md="3"
      >
        <GenericCard
          :image="type.image"
          :name="type.sandType"
          nview="search-beach-3"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    if (params.sandType !== null) delete params.sandType
    const beaches = await $axios.get('/places/search', {
      params: { ...params },
    })
    return { beaches: beaches.data, params }
  },
  data() {
    return {
      types: [
        {
          sandType: 'Piedras',
          image: 'gravel-stone.jpeg',
        },
        {
          sandType: 'Arena negra',
          image: 'black-sand.jpg',
        },
        {
          sandType: 'Arena blanca',
          image: 'white-sand.jpg',
        },
      ],
    }
  },
  mounted() {},
  // mounted() {
  //   this.params = this.$route.params
  // },
  // methods: {
  //   delFilter() {
  //     delete this.$route.params.sandType
  //     console.log('sb2',this.$route.params)
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.choose {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>