<template>
  <v-container fluid class="choose">
    <v-row align="center" justify="center" class="mt-5">
      <v-col class="d-flex justify-center" xs="6" sm="6" md="4" lg="4" xl="4">
        <ButtonBeachesFilter
          v-if="params"
          :params="params"
          :beaches="beaches"
        />
      </v-col>
      <v-col class="d-flex justify-center" xs="6" sm="2" md="2" lg="2" xl="2">
        <v-btn-toggle>
          <nuxt-link
            :to="{ params: { ...params }, name: 'search-beach-3' }"
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
            :to="{ params: { ...params }, name: 'beaches-results' }"
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
        v-for="(surge, idx) in surges"
        :key="idx"
        class="px-lg-10"
        cols="12"
        xs="12"
        sm="4"
        md="3"
      >
        <CardBeachMobile
          v-if="$vuetify.breakpoint.xs"
          :name="surge.surge"
          :image="surge.image"
          nview="beaches-results"
        />
        <CardBeach
          v-else
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
  async asyncData({ $axios, params }) {
    const beaches = await $axios.get('/places/search', {
      params: { ...params },
    })
    if (params === {}) return { beaches: beaches.data }
    return { beaches: beaches.data, params }
  },
  data() {
    return {
      surges: [
        {
          surge: 'Aguas tranquilas',
          image: 'surge-calm.jpg',
        },
        {
          surge: 'Oleaje moderado',
          image: 'surge-medium.jpeg',
        },
        {
          surge: 'Oleaje fuerte',
          image: 'surge-hard.jpeg',
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