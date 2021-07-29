<template>
  <v-app id="app">
    <v-main class="main">
      <nuxt />
    </v-main>
    <v-footer
        v-if="
          $vuetify.breakpoint.md ||
          $vuetify.breakpoint.lg ||
          $vuetify.breakpoint.xl
        "
        class="justify-center pl-0"
        inset
        app
      >
        <span>&copy; 2021</span>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Unauthenticated'
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap');

.v-application {
  font-family: 'Poppins', sans-serif !important;
}
</style>
