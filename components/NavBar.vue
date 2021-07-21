<template>
  <div>
    <v-app-bar color="blue" dark app fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <div d-flex>
      <v-img v-if="$vuetify.breakpoint.xs" height="24" width="24" :src="require('../assets/logonb.png')"></v-img>
      <v-toolbar-title v-else><b>Let's go!</b> Canarias</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <div flex-grow-1 flex-lg-grow-0 class="w-20">
        <v-row>
          <v-col>
        <input
          type="text"
          placeholder="Buscar..."
          style="background-color: white"
          @keyup.enter="$router.push({ query: { name: name },  name: 'beaches-results'})"
        />
        </v-col>
        <v-col>
          <v-btn icon @click="logout">
           <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-col>
        </v-row>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <nuxt-link to="/" style="text-decoration: none; color: inherit">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cuenta/Registrarse</v-list-item-title>
          </v-list-item>

          <nuxt-link to="/restaurants" style="text-decoration: none; color: inherit">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-food-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Restaurantes</v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link
            to="/search-rest-1"
            style="text-decoration: none; color: inherit"
          >
          <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-magnify</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Encuentra tu restaurante</v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link
            to="/beaches"
            style="text-decoration: none; color: inherit"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Playas</v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link
            to="/search-beach-1"
            style="text-decoration: none; color: inherit"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-magnify</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Encuentra tu playa</v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link
            to="/museums"
            style="text-decoration: none; color: inherit"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home-modern</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Museos</v-list-item-title>
            </v-list-item>
          </nuxt-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    name: ''
  }),
  methods: {
   async logout() {
     await this.$auth.logout()
     this.$auth.removeUniversal('role')
    }
  }
}
</script>