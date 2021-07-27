<template>
  <v-container fluid fill-height class="index">
    <v-row>
      <v-col
        :offset="$vuetify.breakpoint.mdAndUp ? '6' : '0'"
        cols="12"
        md="6"
        align="center"
        justify="center"
      >
        <v-img
          :src="require('/assets/logoletsgo.png')"
          height="140"
          width="280"
          class="mt-1"
        ></v-img>
      </v-col>

      <v-col
        class="pa-xs-0"
        :offset="$vuetify.breakpoint.mdAndUp ? '6' : '0'"
        cols="12"
        md="6"
        align="center"
        justify="center"
      >
        <Login />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'unauthenticated',
  middleware: 'user',
}
</script>
<style lang="scss" scoped>
.index {
  display: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/background_index.jpg');
  background-size: cover;
  background-position: center;
}
</style>