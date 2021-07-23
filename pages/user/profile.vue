<template>
  <v-container fluid fill-height class="index">
    <v-row>
      <v-col align="center" justify="center">
        <v-card
          align="center"
          class="pa-10 rounded-xl"
          elevation="5"
          width="450px"
          height="550px"
        >
          <v-form>
            <v-text-field
              v-model="email"
              disabled
              filled
              dense
              outlined
              clearable
              type="text"
              label="email"
              :rules="[rules.email]"
            >
            </v-text-field>
            <v-text-field
              v-model="nickName"
              :disabled="edit"
              filled
              dense
              outlined
              clearable
              type="text"
              label="alias"
            >
            </v-text-field>
            <v-text-field
              v-model="firstName"
              :disabled="edit"
              filled
              dense
              outlined
              clearable
              type="text"
              label="nombre"
            >
            </v-text-field>
            <v-text-field
              v-model="lastName"
              :disabled="edit"
              filled
              dense
              outlined
              clearable
              type="text"
              label="apellidos"
            >
            </v-text-field>
            <v-text-field
              v-model="password"
              :disabled="edit"
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
              :disabled="edit"
              filled
              dense
              outlined
              clearable
              type="password"
              label="confirmar password"
              :rules="[confPassRule]"
            ></v-text-field>
          </v-form>
          <v-btn-toggle class="mb-5"
            ><v-btn
              width="100px"
              v-show="edit === true"
              :small="$vuetify.breakpoint.xs"
              dark
              color="#4D7F9A"
              class="me-5"
              @click="edit = !edit"
              >EDITAR</v-btn
            >
            <v-btn
              width="100px"
              v-show="edit === false"
              :small="$vuetify.breakpoint.xs"
              dark
              color="secondary"
              class="me-5"
              @click="noChanges"
              >CANCELAR</v-btn
            >
            <v-btn
              width="100px"
              :disabled="edit"
              :small="$vuetify.breakpoint.xs"
              :dark="!edit"
              color="#FF9A00"
              @click="updateUser"
              >ACTUALIZAR</v-btn
            ></v-btn-toggle
          >

          <v-btn
            width="200px"
            dark
            :small="$vuetify.breakpoint.xs"
            color="red accent-4"
            @click="edit = !edit"
            >ELIMINAR CUENTA</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',

  data() {
    return {
      email: '',
      password: '',
      confPass: '',
      firstName: '',
      lastName: '',
      nickName: '',
      edit: true,
      rules: {
        email: (value) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || 'Formato inválido',
        password: (value) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value) ||
          '8 caracteres, 1 número, 1 mayúscula y 1 minúscula',
      },
    }
  },
  computed: {
    confPassRule() {
      return () =>
        this.password === this.confPass || 'Las contraseñas no coinciden'
    },
  },
  mounted() {
    this.nickName = this.$store.$auth.$state.user.nickName
    this.firstName = this.$store.$auth.$state.user.firstName
    this.lastName = this.$store.$auth.$state.user.lastName
    this.email = this.$store.$auth.$state.user.email
  },
  methods: {
    profileFields() {
      this.nickName = this.$store.$auth.$state.user.nickName
      this.firstName = this.$store.$auth.$state.user.firstName
      this.lastName = this.$store.$auth.$state.user.lastName
      this.email = this.$store.$auth.$state.user.email
    },
    noChanges() {
      this.edit = !this.edit
      this.profileFields()
    },
    updateUser() {
      this.edit = !this.edit
      this.update()
    },
    async update() {
      try {
        await this.$axios.post(`/user/${this.email}`, {
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
  },
}
</script>
<style lang="scss">
.index {
  display: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/background_index.jpg') !important;
  background-size: cover;
  background-position: center;
}
</style>