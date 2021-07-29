<template>
  <v-container fluid fill-height class="index">
    <v-row>
      <v-col v-if="$vuetify.breakpoint.lgAndUp" style="max-width:70%" lg="8" xl="6">
        <v-timeline class="ms-10">
          <v-timeline-item color="#FF9A00" fill-dot right small>
            <v-card>
              <v-card-title style="background-color: #FF9A00;">
                <v-icon dark size="42" class="mr-4"> mdi-magnify </v-icon>
                <h4 class="text-h4 white--text font-weight-light">Búsqueda de playas</h4>
              </v-card-title>
              <v-container>
                <v-row >
                  <v-col cols="12">
                    <p style="font-size:17px">Encuentra tu playa ideal y su localización, gracias a nuestra amplia base de datos.</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item color="secondary" fill-dot left small>
            <v-card>
              <v-card-title class="secondary">
                <v-icon dark size="40"> mdi-food-fork-drink </v-icon>
                <h4 class="text-h4 ms-2 white--text font-weight-light" style="font-size:20px">
                  ¿Dónde comer?
                </h4>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <p style="font-size:17px">Aquí encontrarás todo tipo de restaurantes, bares, cafeterías y guachinches para que puedas disfrutar de sus mejores platos y bebidas.</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item color="#4D7F9A" fill-dot right small>
            <v-card>
              <v-card-title style="background-color: #4D7F9A">
                <v-icon class="mr-4" dark size="42"> mdi-share-variant </v-icon>
                <h4 class="text-h4 white--text font-weight-light">Compartir lugares</h4>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <p style="font-size:17px">Podrás compartir cualquier lugar con tus familiares o amigos para conocer nuevos sitios de las islas.
                      </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>

      <v-col
        xs="12"
        lg="4"
        xl="6"
        :style="[$vuetify.breakpoint.mdAndDown ? {'margin-top': '0px'} : {'margin-top': '140px'}]"
        align="center"
        justify="center"
      >
        <v-img
          :src="require('/assets/logoletsgo.png')"
          height="150"
          width="300"
          class="mt-1"
        ></v-img>
        <Login />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'unauthenticated',
  middleware: 'user',
}
</script>
<style lang="scss" scoped>
.index {
  display: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/background_index.jpg');
  background-size: cover;
  background-position: center;
}
p{
  font-size: 20px;
}
</style>