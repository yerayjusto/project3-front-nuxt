<template>
  <v-card align="center" class="ma-4" elevation="15" width="400px" @v-on:keyup.enter="login" >
    <v-img v-if="$vuetify.breakpoint.xs"
      :src="require('/assets/logoletsgo.png')"
      height="80"
      width="160"
      class="mt-5"
    ></v-img>
    <v-img v-else
      :src="require('/assets/logoletsgo.png')"
      height="100"
      width="200"
      class="mt-5"
    ></v-img>
    <v-card-text>
      <v-text-field
        filled
        dense
        outlined
        clearable
        type="text"
        label="e-mail"
      >
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

      <v-text-field
        filled
        dense
        outlined
        clearable
        type="text"
        label="alias"
      ></v-text-field>
      <v-btn
        dark
        class="ma-0"
        color="blue"
      >
        Entrar
      </v-btn>
      <nuxt-link to=""><v-card-text class="pa-0 mt-2">¿Has olvidado la contraseña?</v-card-text></nuxt-link>
    </v-card-text>

    <v-divider></v-divider>

    <v-btn
        dark
        class="ma-2"
        color="success"
      >
        Registrarse
      </v-btn>

  </v-card>
</template>

<script>
export default {
   name: 'Login',

    data () {
      return {
        email: '',
        password: '',
        loader: null,
        loading4: false
      }
    },

    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
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