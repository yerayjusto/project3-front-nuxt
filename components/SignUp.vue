<template>
  <v-card
    align="center"
    class="ma-0 pa-0 rounded-xl"
    elevation="15"
    width="400px"
    @v-on:keyup.enter="signup"
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
      <v-text-field
        filled
        dense
        outlined
        clearable
        type="text"
        label="alias"
      ></v-text-field>
      <v-text-field
        filled
        dense
        outlined
        clearable
        ref="name"
        type="text"
        label="nombre"
        v-model="firstName"
      ></v-text-field>
      <v-text-field
        filled
        dense
        outlined
        clearable
        ref="name"
        type="text"
        label="apellidos"
        v-model="lastName"
      ></v-text-field>
      <v-text-field
        filled
        dense
        outlined
        clearable
        ref="email"
        type="text"
        label="email"
        v-model="email"
        :rules="[rules.email]"
      ></v-text-field>
      <v-text-field
        filled
        dense
        outlined
        clearable
        ref="password"
        type="password"
        label="password"
        v-model="password"
        :rules="[rules.password]"
      ></v-text-field>
      <v-text-field
        filled
        dense
        outlined
        clearable
        type="password"
        label="confirmar password"
        v-model="confPass"
        :rules="[confPassRule]"
      ></v-text-field>
      <v-btn dark width="100%" color="#FF9A00" large @click="submit">
      Registrarse
    </v-btn>
    </v-card-text>

    <v-divider></v-divider>
          <nuxt-link to="/" style="text-decoration: none; color: inherit">
      <btn icon>
        <v-icon large>mdi-arrow-left-bold-circle</v-icon>
      </btn>
      </nuxt-link>


  </v-card>
</template>

<script>
export default {
  name: 'Signup',

  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confPass: '',
    role: '',
    formHasErrors: false,
    rules: {
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        ) || 'Formato inválido',
      password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value) ||
        '8 caracteres, 1 número, 1 mayúscula y 1 minúscula',
    },
  }),
  computed: {
    confPassRule() {
      return () =>
        this.password === this.confPass || 'Las contraseñas no coinciden'
    },
    form() {
      return {
        email: this.email,
        password: this.password,
      }
    },
  },
  methods: {
    submit() {
      this.formHasErrors = false

      Object.keys(this.form).forEach((field) => {
        if (!this.form[field]) this.formHasErrors = true

        this.$refs[field].validate(true)
      })

      if (!this.formHasErrors) this.signup()
    },
    // signup() {
    //   AuthService.signup(this.name, this.email, this.password, this.role)
    //   .then(response => {
    //     localStorage.setItem('token', response.token)
    //     localStorage.setItem('email', response.email)
    //     localStorage.setItem('role', response.role)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // }
  },
}
</script>