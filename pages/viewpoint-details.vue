<template>
  <v-container fluid fill-height class="details">
    <v-row class="d-flex justify-center" :md="10" :xs="12">
      <v-col :lg="7" :md="6" :sm="6" :xs="12">
        <v-card class="mx-auto">
          <v-img :src="place.imageUrl" height="400px" width="1200px"></v-img>

          <v-card-title>
            {{ place.name }}
          </v-card-title>
          <v-rating
            length="5"
            readonly
            background-color="#FF9A00"
            color="#FF9A00"
            :value="place.rate"
          >
          </v-rating>
          <v-card-subtitle>
            {{ place.island }} - {{ place.municipality }}
          </v-card-subtitle>
          <v-card-text>
            <b>Descripción:</b> <br />{{ place.description }}<br />
            <br />
            <b>Localización:</b> {{ place.coordY }} , {{ place.coordX }} <br />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col :lg="3" :md="5" :sm="5" :xs="12">
        <v-card :loading="loading" class="mx-auto" style="height: 100%">
          <div class="map-container">
            <Map :coordinates="coordinates" />
          </div>
            <v-container fluid>
            <v-row>
              <v-col align-self="center">
                <v-card-title center>Comentarios</v-card-title>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col>
                <v-container fluid style="height: 32vh; overflow: auto">
                  <div v-for="(comment, idx) in place.comments" :key="idx">
                    <v-card-subtitle>
                      <v-row>
                        <v-col>
                          {{ comment.title }}
                        </v-col>
                        <v-col style="text-align: right">
                          {{ comment.userId.nickName }}
                        </v-col>
                      </v-row>
                    </v-card-subtitle>
                    <v-card-text>
                      <v-row>
                        <v-col>
                          {{ comment.message }}
                        </v-col>
                      </v-row>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="comment.rate"
                          color="#FF9A00"
                          background-color="#FF9A00"
                          dense
                          half-increments
                          readonly
                          size="14"
                        ></v-rating>
                      </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                  </div>
                </v-container>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row>
              <v-col pa-10>
                <AddComment :id="place._id" @updateComments="updateComments" />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'viewpoint-details',
  async asyncData({ $axios, query }) {
    const place = await $axios.get(`/places/${query.id}`)
    return {
      place: place.data,
      coordinates: { x: place.data.coordX, y: place.data.coordY },
    }
  },
  data: () => ({
    show: false,
  }),
  mounted() {},
}
</script>
<style>
.map-container {
  height: 300px;
}

.details {
  display: absolute;
  width: 100%;
  height: 100%;
}
@media (max-width: 600px) {
  h1 {
    font-size: 18px;
  }
  #btn-menu {
    width: 50px;
  }
}
</style>
