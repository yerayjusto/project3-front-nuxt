<template>
  <v-app>
    <NavBar/>
    <v-main class="main">
      <nuxt/>
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
