<template>
  <div>
      <v-app-bar
      dark
      shrink-on-scroll
      src="bgnavbar.jpg"
      style="position: fixed"
      app
    >
      <div class="div-text">
      <nuxt-link to="/" style="text-decoration: none; color: white;">
      LET'S GO!
      CANARIAS
      </nuxt-link>
      </div>

      <v-row>
        <v-col offset="7" cols="4">

        </v-col>
        <v-col cols="1">
      <v-btn icon>

      </v-btn>
      </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",

}
</script>

<style lang="scss" scoped>
.input-search{
  background-color: white;
  height: 200px;
}
v-text-field{
  width:100px;
}
.div-text{
  width: 500px;
  font-size: 40px;
}
</style>