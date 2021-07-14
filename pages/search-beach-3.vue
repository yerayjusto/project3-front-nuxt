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
        <h1>Tamaño:</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col
        class="d-flex justify-center col-sm-6 col-md-4 col-lg-3"
        cols="12"
        v-for="(size, idx) in sizes"
        :key="idx"
      >
        <GenericCard
          :image="size.image"
          :name="size.size"
          nextView="/search-beach-4"
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          :to="{ params: { ...$route.params }, name: 'search-beach-2' }"
          style="text-decoration: none; color: inherit"
        >
          <v-btn class="secondary" width="150" height="50">ATRAS</v-btn>
        </nuxt-link>
      </v-col>
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-3">
        <nuxt-link
          :to="{ params: { ...$route.params }, path: '4' }"
        >
          <v-btn class="primary" width="180" height="50"
            >SIGUIENTE (SALTAR)</v-btn
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
      sizes: [
        {
          size: "Pequeña",
          image: "small-beach.jpg",
        },
        {
          size: "Mediana",
          image: "medium-beach.jpg",
        },
        {
          size: "Grande",
          image: "large-beach.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.choose {
  width: 100%;
  height: 100%;
}
</style>