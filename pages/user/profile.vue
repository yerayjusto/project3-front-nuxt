<template>
<v-container fluid fill-height class="index">
    <v-row>
      <v-col
        align="center"
        justify="center"
      >
        <v-card
    align="center"
    class="pa-10 rounded-xl"
    elevation="5"
    width="450px"
    height="380px"
  >
    <v-card-text>
      <v-text-field filled dense outlined clearable v-model="firstName" type="text"
      label="nombre">
      </v-text-field>
      <v-text-field filled dense outlined clearable v-model="lastName" type="text"
      label="apellido">
      </v-text-field>
      <v-text-field filled dense outlined clearable v-model="email" type="text"
      label="email">
      </v-text-field>
      </v-card-text>
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
      firstName: '',
      lastName: '',
    }
  },
mounted() {
  this.firstName = this.$store.$auth.$state.user.firstName
  this.lastName = this.$store.$auth.$state.user.lastName
  this.email = this.$store.$auth.$state.user.email
},
}
</script>