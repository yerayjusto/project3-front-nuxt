<template>
  <v-container fluid class="choose">
    <v-row>
      <v-col
        class="d-flex justify-center"
        style="
          font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI,
            Roboto;
        "
      >
        <h1>Tipo de playa:</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          :to="{ params: { ...params }, name: 'search-beach-1' }"
          style="text-decoration: none; color: inherit"
        >
          <v-btn class="secondary" width="160" height="50">ATRAS</v-btn>
        </nuxt-link>
      </v-col>
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          :to="{ params: { ...params }, name: 'search-beach-3' }"
        >
          <v-btn class="primary" width="160" height="50"
            >SIGUIENTE (SALTAR)</v-btn
          >
        </nuxt-link>
      </v-col>
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          :to="{ params: { ...params }, name: 'beaches-results' }"
          style="text-decoration: none; color: inherit"
        >
          <v-btn
            class="success"
            width="180"
            height="50"
            >{{ beaches.length }} RESULTADOS>></v-btn
          >
        </nuxt-link>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(type, idx) in types"
        :key="idx"
        class="px-lg-15"
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
  async asyncData({$axios, params}) {
    const beaches = await $axios.get('/places/search', { params: { ...params } })
    return { beaches: beaches.data, params }
  },
  data() {
    return {
      types: [
        {
          sandType: "Piedras",
          image: "gravel-stone.jpeg",
        },
        {
          sandType: "Arena negra",
          image: "black-sand.jpg",
        },
        {
          sandType: "Arena blanca",
          image: "white-sand.jpg",
        },
      ],
    };
  },
  created(){
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.choose {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>