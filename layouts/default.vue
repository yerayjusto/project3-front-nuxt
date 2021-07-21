<template>
  <v-app id="app">
    <NavBar v-if="$route.name !== 'index' && $route.name !== 'user-signup'" />
    <v-main class="main">
      <nuxt />
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
    </v-main>
  </v-app>
</template>

<script>
export default {
 // middleware: 'user'
}
</script>
<style>
#app {
  background: url('../assets/bgletsgo3.jpg') !important;
  background-size: cover;
  background-position: center;
  font-family: -apple-system, Roboto, BlinkMacSystemFont, 'Segoe UI', Oxygen,
    Ubuntu, Cantarell, sans-serif, 'Helvetica Neue', 'Open Sans';
}
</style>
