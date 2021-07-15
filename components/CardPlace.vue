<template>
  <v-card id="place-vcard" class="ma-auto">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      v-if="$vuetify.breakpoint.xs"
      height="100"
      :src="place.imageUrl"
    ></v-img>
    <v-img v-else height="250" :src="place.imageUrl"></v-img>

    <v-card-title
      v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      style="font-size: 16px"
      ><div class="title-text">{{ place.name }}</div></v-card-title
    >
    <v-card-title v-else
      ><div class="title-text">{{ place.name }}</div></v-card-title
    >

    <v-card-text>
      <v-row align="center" class="mx-0 d-flex flex-nowrap">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div
          v-show="$vuetify.breakpoint.md || $vuetify.breakpoint.lg"
          class="grey--text ms-4"
        >
          4.5 (413)
        </div>
      </v-row>

      <div
        v-show="$vuetify.breakpoint.md || $vuetify.breakpoint.lg"
        class="my-4 text-subtitle-1"
      >
        {{ place.island }} - {{ place.municipality }}
      </div>

      <div v-show="$vuetify.breakpoint.lg" class="text-desc">
        <p>{{ place.description }}</p>
      </div>
    </v-card-text>
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
}
</script>
<style scoped>
.title-text {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
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
@media (min-width: 800) and (max-width: 1200px) {
  #place-vcard {
    height: 500px;
  }
  .text-desc {
    display: none;
  }
  .title-text {
    white-space: nowrap;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
@media (min-width: 1200px) {
  #place-vcard {
    height: 500px;
  }
}
</style>