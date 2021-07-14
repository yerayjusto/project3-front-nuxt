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
        <h1>Oleaje:</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          to="/search-beach-3"
          style="text-decoration: none; color: inherit"
        >
          <v-btn class="secondary" width="160" height="50">ATRAS</v-btn>
        </nuxt-link>
      </v-col>
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          :to="{ params: { ...params }, path: 'beaches-results' }"
        >
          <v-btn class="primary" width="160" height="50"
            >SIGUIENTE (SALTAR)</v-btn
          >
        </nuxt-link>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        v-for="(surge, idx) in surges"
        :key="idx"
        class="px-lg-15"
        cols="6"
        xs="4"
        sm="4"
        md="3"

      >
        <GenericCard
          :image="surge.image"
          :name="surge.surge"
          nview="beaches-results"
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
      surges: [
        {
          surge: "Aguas tranquilas",
          image: "surge-calm.jpg",
        },
        {
          surge: "Oleaje moderado",
          image: "surge-medium.jpeg",
        },
        {
          surge: "Oleaje fuerte",
          image: "surge-hard.jpeg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.choose {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>