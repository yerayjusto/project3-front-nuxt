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

}
</script>
<style>
#app {
  font-family: -apple-system, Roboto, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell,  sans-serif
  , 'Helvetica Neue', 'Open Sans';
}
</style>
