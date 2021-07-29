<template>
  <v-card width="350" height="500">
    <v-img height="250" :src="place.imageUrl"
      ><v-row class="ma-1" align="start" justify="end"
        ><v-btn v-if="isFav" icon @click="changeFav"
          ><v-icon color="#FF9A00">mdi-star</v-icon></v-btn
        ><v-btn v-else icon @click="changeFav"
          ><v-icon color="#FF9A00">mdi-star-outline</v-icon></v-btn
        >
      </v-row>
    </v-img>
    <nuxt-link
      :to="{ query: { id: place._id }, name: nameDetailsPage }"
      style="text-decoration: none; color: inherit"
    >
      <v-card-title style="word-break: normal">{{ place.name }}</v-card-title>
      <v-row class="ms-3">
        <v-rating
          :value="place.rate"
          color="#FF9A00"
          background-color="#FF9A00"
          dense
          readonly
        ></v-rating>
      </v-row>

      <v-card-subtitle v-if="place.municipality.length > 23">
        {{ place.island }} - {{ place.municipality.slice(0, 20) + '...' }}
      </v-card-subtitle>

      <v-card-subtitle v-else>
        {{ place.island }} - {{ place.municipality }}
      </v-card-subtitle>

      <v-card-text
        v-if="place.description.length > 120"
        style="overflow-x: hidden"
      >
        {{ place.description.slice(0, 117) + '...' }}
      </v-card-text>

      <v-card-text v-else style="overflow-x: hidden">
        {{ place.description }}
      </v-card-text>
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  name: 'CardPlace',

  props: {
    place: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    nameDetailsPage: '',
  }),
  computed: {
    isFav() {
      return this.$auth.user.favs.includes(this.place._id)
    },
  },
  mounted() {
    if (this.place.placeType === 'beaches')
      this.nameDetailsPage = 'beach-details'
    if (this.place.placeType === 'restaurants')
      this.nameDetailsPage = 'restaurant-details'
    if (this.place.placeType === 'viewpoints')
      this.nameDetailsPage = 'viewpoint-details'
    if (this.place.placeType === 'museums')
      this.nameDetailsPage = 'museum-details'
  },
  methods: {
    async addFav() {
      try {
        const res = await this.$axios.post('/users/favs', {
          favs: this.place._id,
        })
        this.$auth.setUser(res.data.user)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async delFav() {
      try {
        const res = await this.$axios.delete('/users/favs', {
          data: { favs: this.place._id },
        })
        this.$auth.setUser(res.data.user)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    changeFav() {
      if (this.isFav) {
        this.delFav()
      } else {
        this.addFav()
      }
    },
  },
}
</script>
<style scoped>
@media (min-width: 200px) and (max-width: 600px) {
  #place-vcard {
    height: 220px;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  #place-vcard {
    height: 350px;
  }
  .text-desc {
    display: none;
  }
}
@media (min-width: 800) {
  #v-card-text {
    white-space: nowrap;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>