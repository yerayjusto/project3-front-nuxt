<template>
  <v-card
    align="center"
    class="ma-4"
    elevation="15"
    width="400px"
  >
    <v-img
      v-if="$vuetify.breakpoint.xs"
      :src="require('/assets/logoletsgo.png')"
      height="80"
      width="160"
      class="mt-5"
    ></v-img>
    <v-img
      v-else
      :src="require('/assets/logoletsgo.png')"
      height="100"
      width="200"
      class="mt-5"
    ></v-img>
    <v-card-text>
      <v-text-field filled dense outlined clearable v-model="email" type="text" label="email">
      </v-text-field>

      <v-text-field
        v-model="password"
        filled
        dense
        outlined
        clearable
        type="password"
        label="password"
      ></v-text-field>
      <v-btn dark class="ma-0" color="blue" @click="userLogin"> Entrar </v-btn>
      <nuxt-link to=""
        ><v-card-text class="pa-0 mt-2"
          >¿Has olvidado la contraseña?</v-card-text
        ></nuxt-link
      >
    </v-card-text>

    <v-divider></v-divider>

    <nuxt-link to="/user/signup" style="text-decoration: none; color: inherit">
      <v-btn dark class="ma-2" color="success"> Registrarse </v-btn>
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      loader: null,
      loading4: false,
    }
  },
computed: {
  login() {
    return { email: this.email, password: this.password }
  }
},
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
  methods: {
    async userLogin(e) {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login,
        })
        console.log(response.data.rol)
        console.log(this.$auth)
        this.$auth.$storage.setUniversal("role", response.data.rol)
      } catch (err) {
        console.log(err)
      }
    },
  },
}

// methods: {
//   login() {
//     AuthService.login(this.email, this.password)
//       .then((response) => {
//         if (response.token) {
//           localStorage.setItem("token", response.token);
//           localStorage.setItem("email", response.email);
//           localStorage.setItem("role", response.role);
//           this.$router.push("/logged");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
// },
</script>