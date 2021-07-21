<template>
    <v-container fluid fill-height class="signup">
    <v-row align="center" justify="center">
      <v-col class="d-flex justify-center pa-xs-0" cols="12">
        <SignUp />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'unauthenticated'
}
</script>
<style>

.signup {
  display: absolute;
  width: 100%;
  height: 100%;
}
</style>