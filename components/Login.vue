<template>
  <div class="d-flex justify-center" id="login">
    <v-snackbar dark v-model="snackbar" top right text>
      <p class="text-center ma-0">{{ snackText }}</p>
    </v-snackbar>
    <v-card width="500px" v-on:keyup.enter="login">
      <v-card-title>Accede a tu cuenta</v-card-title>
      <v-card-text>
        <v-text-field type="text" label="Email" v-model="email"></v-text-field>
        <v-text-field
          type="password"
          label="Passowrd"
          v-model="password"
        ></v-text-field>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn large color="primary" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",

  data: () => ({
    email: "",
    password: "",
    snackbar: false,
    snackText: "",
  }),
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
};
</script>
<style lang="scss" scoped>
#login{
  opacity: 0,1;
  height: auto;
  width: auto;
}
</style>