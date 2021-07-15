<template>
  <div>
    <v-app-bar color="blue" dark app fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Let's go! Canarias</v-toolbar-title>
      <v-spacer></v-spacer>
      <div flex-grow-1 flex-lg-grow-0 class="w-20">
        <input
          type="text"
          placeholder="Buscar..."
          style="background-color: white"
        />
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
  }),
}
</script>