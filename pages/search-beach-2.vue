<template>
  <v-container fluid class="choose">
    <v-row class="mt-5" align="center">
      <ButtonBeachesFilter v-if="params" :params="params" :beaches="beaches" />
      <v-spacer></v-spacer>
      <v-col class="d-flex justify-end px-lg-15" xs="6" sm="4">
        <v-btn-toggle>
          <nuxt-link
            :to="{ params: { ...params }, name: 'search-beach-1' }"
            style="text-decoration: none; color: inherit"
          >
            <v-btn
              v-if="$vuetify.breakpoint.smAndDown"
              class="ma-0"
              color="secondary"
            >
              <v-icon color="white">mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-btn v-else class="me-2 secondary">VOLVER</v-btn>
          </nuxt-link>
          <nuxt-link
            :to="{ params: { ...params }, name: 'search-beach-3' }"
            style="text-decoration: none; color: inherit"
          >
            <v-btn
              v-if="$vuetify.breakpoint.smAndDown"
              class="mx-2"
              color="#FF9A00"
            >
              <v-icon color="white">mdi-arrow-right-bold</v-icon>
            </v-btn>
            <v-btn v-else dark color="#FF9A00"> SIGUIENTE </v-btn>
          </nuxt-link>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(type, idx) in types"
        :key="idx"
        class="px-lg-15"
        cols="12"
        xs="12"
        sm="4"
      >
        <CardBeachMobile
          v-if="$vuetify.breakpoint.xs"
          :name="type.sandType"
          :image="type.image"
          nview="search-beach-3"
        />
        <CardBeach
          v-else
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
}
</script>

<style lang="scss" scoped>
.choose {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>