<template>
  <v-card
    align="center"
    class="pa-10 rounded-xl"
    elevation="5"
    width="450px"
    height="380px"
    rounded
  >
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
      <v-btn dark width="180" class="ma-0" color="#4D7F9A" @click="userLogin"> Entrar </v-btn>
      <nuxt-link to="" style="text-decoration: none;"
        ><v-card-text
          >¿Has olvidado la contraseña?</v-card-text
        ></nuxt-link
      >
    </v-card-text>

    <nuxt-link to="/signup" style="text-decoration: none; color: inherit">
      <v-btn dark width="180" class="ma-1" color="#FF9A00"> Registrarse </v-btn>
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
</script>