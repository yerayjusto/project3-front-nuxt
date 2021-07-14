<template>
  <v-container fluid class="choose">

    <v-row>
      <v-col
        class="d-flex justify-center"
      >
        <h1>Elige Isla:</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mt-5">
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-2">
        <nuxt-link to="/" style="text-decoration: none; color: inherit">
          <v-btn cols="12" xs="6" sm="6" class="secondary" width="160" height="50"
            >MENU PRINCIPAL</v-btn
          >
        </nuxt-link>
      </v-col>
      <v-col class="d-flex justify-center col-sm-6 col-md-4 col-lg-2">
        <nuxt-link
          :to="{ params: { ...$route.params }, path: '/search-beach-2' }"
        >
          <v-btn cols="12" xs="6" sm="6" class="primary" width="160" height="50"
            >SIGUIENTE (SALTAR)</v-btn
          >
        </nuxt-link>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(island, idx) in islands"
        :key="idx"
        class="d-flex justify-center px-lg-15"
        cols="6"
        xs="4"
        sm="4"
        md="3"
      >
        <GenericCard
          :name="island.island"
          :image="island.image"
          nview="search-beach-2"
        />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      islands: [
        {
          island: "Tenerife",
          image: "tenerife.jpg",
        },
        {
          island: "La Palma",
          image: "la-palma.jpg",
        },
        {
          island: "La Gomera",
          image: "la-gomera.jpg",
        },
        {
          island: "El Hierro",
          image: "el-hierro.jpg",
        },
        {
          island: "Gran Canaria",
          image: "gran-canaria.jpg",
        },
        {
          island: "Fuerteventura",
          image: "fuerteventura.jpg",
        },
        {
          island: "Lanzarote",
          image: "lanzarote.jpg",
        },
        {
          island: "La Graciosa",
          image: "la-graciosa.jpg",
        },
      ],
      beaches: Object,
    };
  },
};
</script>

<style lang="scss">
.choose {
  display: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/bgletsgo3.jpg') !important;
  background-size:cover;
  background-position:center;
}
</style>