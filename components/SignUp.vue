<template>
  <v-card
    align="center"
    class="ma-0 pa-5 rounded-xl"
    elevation="15"
    width="400px"
    @v-on:keyup.enter="signup"
  >
    <v-card-text>
      <v-text-field
        v-model="alias"
        filled
        dense
        outlined
        clearable
        type="text"
        label="alias"
      ></v-text-field>
      <v-text-field
        ref="name"
        v-model="firstName"
        filled
        dense
        outlined
        clearable
        type="text"
        label="nombre"
      ></v-text-field>
      <v-text-field
        ref="name"
        v-model="lastName"
        filled
        dense
        outlined
        clearable
        type="text"
        label="apellidos"
      ></v-text-field>
      <v-text-field
        ref="email"
        v-model="email"
        filled
        dense
        outlined
        clearable
        type="text"
        label="email"
        :rules="[rules.email]"
      ></v-text-field>
      <v-text-field
        ref="password"
        v-model="password"
        filled
        dense
        outlined
        clearable
        type="password"
        label="password"
        :rules="[rules.password]"
      ></v-text-field>
      <v-text-field
        v-model="confPass"
        filled
        dense
        outlined
        clearable
        type="password"
        label="confirmar password"
        :rules="[confPassRule]"
      ></v-text-field>
      <v-btn dark width="100%" color="#FF9A00" large @click="submit">
        Registrarse
      </v-btn>
    </v-card-text>

    <v-divider></v-divider>
    <nuxt-link to="/" style="text-decoration: none; color: inherit">
      <v-card-text>Ya tengo una cuenta</v-card-text>
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
    alias: '',
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
      };
    },
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('/auth/signup', {
          alias: this.alias,
          firstName: this.firstName,
          lastName: this.lastName,
          nickName: this.alias,
          email: this.email,
          password: this.password,
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    submit() {
      this.formHasErrors = false

      Object.keys(this.form).forEach((field) => {
        if (!this.form[field]) this.formHasErrors = true
        
        this.$refs[field].validate(true)
      })
      if (!this.formHasErrors) this.register()
    },
  },
}
</script>