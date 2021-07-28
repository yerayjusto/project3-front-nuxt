<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Nuevo comentario
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Nuevo comentario</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="title"
                    :counter="50"
                    :rules="titleRules"
                    label="Titulo*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="message"
                    :counter="400"
                    :rules="messageRules"
                    label="Mensaje*"
                    required
                  ></v-text-field>
                  <div class="text-center">
                    <v-rating
                      v-model="rate"
                      color="amber"
                      background-color="amber"
                      icon-label="custom icon label text {1} of {1}"
                    ></v-rating>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <small>*indica que el campos es requerido</small>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="validate"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'AddComment',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      valid: false,
      title: '',
      titleRules: [
        (v) => !!v || 'El titulo del comentario es requerido',
        (v) =>
          (v && v.length <= 50) ||
          'El titulo del comentario debe tener 50 caracteres como máximo',
      ],
      message: '',
      messageRules: [
        (v) => !!v || 'El mensaje del comentario es requerido',
        (v) =>
          (v && v.length <= 400) ||
          'El titulo del comentario debe tener 400 caracteres como máximo',
      ],
      rate: 1,
    }
  },
  computed: {},
  methods: {
    async addComment() {
      try {
        await this.$axios.post('/comments', {
          placeId: this.id,
          title: this.title,
          message: this.message,
          rate: this.rate,
        })

        close()
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.addComment()
        this.dialog = false
      } else {
        return false
      }
    },
    close() {
      this.valid = false
      this.dialog = false
      this.$refs.form.resetValidation()
      this.title = ''
      this.message = ''
      this.rate = 1
    },
  },
}
</script>
