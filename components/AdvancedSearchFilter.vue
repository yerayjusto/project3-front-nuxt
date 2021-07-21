<template>
    <v-container fluid>
        <v-row>
            <v-col style="padding-bottom: 0">
                <h4>Nombre</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <input type="text" placeholder="" style="border: 1px solid grey; background-color: white; width:100%">
            </v-col>
        </v-row>
        <v-row>
            <v-col style="padding-bottom: 0">
                <v-divider style="margin-bottom:20px"></v-divider>
                <h4>Tipo de lugar</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list>
                    <v-list-item-group v-model="model">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Playas</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Restaurantes</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Museos</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Miradores</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
        <v-row>
            <v-col style="padding-bottom: 0">
                <v-divider style="margin-bottom:20px"></v-divider>
                <h4>Provincia</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list>
                    <v-list-item-group v-model="model">
                        <v-list-item style="border: 1px solid black">
                            <v-list-item-content>
                                <v-list-item-title>Las Palmas</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item style="border: 1px solid black">
                            <v-list-item-content>
                                <v-list-item-title>Santa Cruz de Tenerife</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
        <v-row>
            <v-col style="padding-bottom: 0">
                <v-divider style="margin-bottom:20px"></v-divider>
                <h4>Isla</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list>
                    <v-list-item-group v-model="model">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>El Hierro</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Fuerteventura</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Gran Canaria</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>La Gomera</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>La Graciosa</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>La Palma</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Lanzarote</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Santa Cruz de Tenerife</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>

s