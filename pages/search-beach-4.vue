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
      <v-col
        class="d-flex justify-center col-sm-6 col-md-4 col-lg-3"
        cols="12"
        v-for="(surge, idx) in surges"
        :key="idx"
      >
        <GenericCard
          :image="surge.image"
          :name="surge.surge"
          nextView="/search-beach-result"
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          to="/search-beach-3"
          style="text-decoration: none; color: inherit"
        >
          <v-btn class="secondary" width="150" height="50">ATRAS</v-btn>
        </nuxt-link>
      </v-col>
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          :to="{ params: { ...$route.params }, path: 'beaches-results' }"
        >
          <v-btn class="primary" width="180" height="50"
            >FINALIZAR (SALTAR)</v-btn
          >
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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