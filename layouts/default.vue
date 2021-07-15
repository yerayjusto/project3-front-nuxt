<template>
  <v-app>
    <NavBar />
    <v-main class="main">
      <nuxt />
      <v-footer class="justify-center pl-0" inset app>
        <span>&copy; 2021</span>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  /* data() {
    return {
      search: ''
    }
  },
  mounted() {
    this.$root.$on("searchProduct", (search) => {
      this.search = search
    })
  } */
}
</script>
