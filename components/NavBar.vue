<template>
  <div class="d-flex flex-direction: row;">
    <v-app-bar color="#4D7F9A" dark app fixed>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <div class="me-5">
        <v-img
          v-if="$vuetify.breakpoint.xs"
          height="24"
          width="24"
          :src="require('../assets/logonb.png')"
        ></v-img>
        <v-toolbar-title v-else>
          <nuxt-link to="/" style="text-decoration: none; color: inherit">
            <b>Let's go!</b> Canarias
          </nuxt-link>
        </v-toolbar-title>
      </div>
      <v-spacer v-if="$vuetify.breakpoint.mdAndDown"></v-spacer>

      <div v-if="$vuetify.breakpoint.lgAndUp" class="d-flex">
        <v-btn-toggle group dense>
          <v-btn
            x-large
            v-for="(btn, idx) in btns"
            :key="idx"
            @click="navBarClick(btn.text)"
          >
            {{ btn.name }}
          </v-btn>
        </v-btn-toggle>
      </div>
      <v-spacer v-if="!$vuetify.breakpoint.md"></v-spacer>
      <div flex-grow-1 flex-lg-grow-1 class="w-20">
        <v-row>
          <v-col>
            <v-text-field
              flat
              v-model="name"
              background-color="white"
              light
              dense
              class="mt-5"
              placeholder="Buscar..."
              solo
              @keyup.enter="
                $router.push({ query: { name: name }, name: 'beaches-results' })
              "
            >
            </v-text-field>
          </v-col>
        </v-row>
      </div>
      <div class="d-flex">
        <v-btn-toggle group dense>
          <v-btn @click="navBarClick('profile')"
            class="mx-0"><v-icon>mdi-account-edit</v-icon></v-btn
          >
          <v-btn @click="logout" class="mx-0"><v-icon>mdi-logout</v-icon></v-btn>
        </v-btn-toggle>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndDown"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <nuxt-link
            to="user/profile"
            style="text-decoration: none; color: inherit"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Mi perfil</v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link
            to="/restaurants"
            style="text-decoration: none; color: inherit"
          >
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
              <v-list-item-title>Donde comer hoy</v-list-item-title>
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
              <v-list-item-title>Playa ideal</v-list-item-title>
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
    name: '',

    btns: [
      { text: 'beaches', name: 'PLAYAS' },
      { text: 'searchBeachs', name: 'PLAYA IDEAL' },
      { text: 'restaurants', name: 'RESTAURANTES' },
      { text: 'searchRestaurants', name: 'DONDE COMER HOY' },
      { text: 'museums', name: 'MUSEOS' },
    ],
  }),
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$auth.$storage.removeUniversal('role')
    },
    navBarClick(btn) {
      if (btn === 'home') this.$router.push('/')
      if (btn === 'profile') this.$router.push('/user/profile')
      if (btn === 'beaches') this.$router.push('/beaches')
      if (btn === 'searchBeachs') this.$router.push('/search-beach-1')
      if (btn === 'restaurants') this.$router.push('/restaurants')
      if (btn === 'searchRestaurants') this.$router.push('/search-rest-1')
      if (btn === 'museums') this.$router.push('/museums')
    },
  },
}
</script>