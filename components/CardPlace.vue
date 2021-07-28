<template>
  <v-card width="350" height="500">
    <v-img height="250" :src="place.imageUrl"
      ><v-row class="ma-1" align="start" justify="end"
        ><v-btn @click="changeFav" v-if="isFav" icon style="z-index: 1"
          ><v-icon color="#FF9A00">mdi-star</v-icon></v-btn
        ><v-btn @click="changeFav" v-else icon style="z-index: 1"
          ><v-icon color="#FF9A00">mdi-star-outline</v-icon></v-btn
        >
      </v-row>
    </v-img>
    <nuxt-link
      :to="{ query: { id: place._id }, name: nameDetailsPage }"
      style="text-decoration: none; color: inherit"
      @click.stop.prevent=""
    >
      <v-card-title style="word-break: normal">{{ place.name }}</v-card-title>
      <v-row class="ms-3">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div v-if="$vuetify.breakpoint.mdAndUp" class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <v-card-subtitle v-if="place.municipality.length > 23">
        {{ place.island }} - {{ place.municipality.slice(0, 20) + '...' }}
      </v-card-subtitle>

      <v-card-subtitle v-else>
        {{ place.island }} - {{ place.municipality }}
      </v-card-subtitle>

      <v-card-text
        v-if="place.description.length > 158"
        style="overflow-x: hidden"
      >
        {{ place.description.slice(0, 155) + '...' }}
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
    isFav: false,
  }),
  methods: {
    async addFav() {
      try {
        await this.$axios.post('/users/favs', {
          favs: this.place._id,
        })
        // this.$auth.user.favs.push(this.place._id)
        console.log(this.$auth.user)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    async delFav() {
      console.log(this.place)
      try {
        await this.$axios.delete('/users/favs', {
          data: { favs: this.place._id },
        })
        /* this.$auth.user.favs.splice(
          this.$auth.user.favs.indexOf(this.place._id)
        ) */
        console.log(this.$auth.user)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    changeFav() {
      if (this.isFav) {
        this.delFav()
        this.isFav = false
      } else {
        this.addFav()
        this.isFav = true
      }
    },
  },
  computed: {
    //   isFav(id) {
    //     if (this.$auth.user.favs.indexOf(id) !== -1) {
    //       this.$auth.user.favs.splice(this.$auth.user.favs.indexOf(id))
    //       return { favs: this.$auth.user.favs }
    //     } else {
    //       this.$auth.user.favs.push(id)
    //       return { favs: this.$auth.user.favs }
    //     }
    //   },
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
    this.isFav = this.$auth.user.favs.includes(this.place._id)
    console.log()
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