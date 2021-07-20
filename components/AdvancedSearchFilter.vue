<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn-toggle
                v-model="text"
                tile
                color="deep-purple accent-3"
                group
                >
                    <v-btn value="left">
                        Left
                    </v-btn>

                    <v-btn value="center">
                        Center
                    </v-btn>

                    <v-btn value="right">
                        Right
                    </v-btn>

                    <v-btn value="justify">
                        Justify
                    </v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>