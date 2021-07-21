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
                <h4>Isla</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list>
                    <v-list-item-group v-model="islandFilter">
                        <template v-for="{name} in islands">
                            <v-list-item :key="name">
                                <v-list-item-content>
                                    <v-list-item-title>{{name}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
        <v-row>
            <v-col style="padding-bottom: 0">
                <v-divider style="margin-bottom:20px"></v-divider>
                <h4>Municipio</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-autocomplete
                    v-model="municipalityFilter"
                    :items=municipality
                    auto-select-first
                    clearable
                ></v-autocomplete>
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
                    <v-list-item-group v-model="placeFilter">
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
        <div v-show="placeFilter == 0">
            <v-row>
                <v-col style="padding-bottom: 0">
                    <v-divider style="margin-bottom:20px"></v-divider>
                    <h4>Ocupación</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Bajo</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Medio</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Alto</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="padding-bottom: 0">
                    <v-divider style="margin-bottom:20px"></v-divider>
                    <h4>Urbanización</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Semiurbana</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Urbana</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Aislada</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
                       <v-row>
                <v-col style="padding-bottom: 0">
                    <v-divider style="margin-bottom:20px"></v-divider>
                    <h4>Tipo de playa</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Arena negra</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Arena blanca</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Piedras</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
                        </v-row>
                       <v-row>
                <v-col style="padding-bottom: 0">
                    <v-divider style="margin-bottom:20px"></v-divider>
                    <h4>Oleaje</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Oleaje fuerte</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Oleaje moderado</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Aguas tranquilas</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="padding-bottom: 0">
                    <v-divider style="margin-bottom:20px"></v-divider>
                    <h4>Forma de acceso</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>A pie fácil</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>A pie dificil</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Coche</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Barco</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        islandFilter: null,
        islands: [
            {
                name: 'El Hierro'
            },
                        {
                name: 'Fuerteventura'
            },
            {
                name: 'Gran Canaria'
            },
            {
                name: 'La Gomera'
            },
            {
                name: 'La Palma'
            },
                        {
                name: 'Lanzarote'
            },
                        {
                name: 'Tenerife'
            },
        ],
        municipalityFilter: null,
        placeFilter: null,
    }),
    computed: {
        hasSelectedIsland() {
            return Number.isInteger(this.islandFilter)
        },
        selectedIsland() {
            return this.hasSelectedIsland? this.islands[this.islandFilter].name: ''
        },
        municipality () {
            if (this.hasSelectedIsland) {
                switch(this.selectedIsland){
                    case 'El Hierro':
                        return ['Frontera', 
                                'Valverde', 
                                'El Pinar de El Hierro'
                                ]
                    case 'Fuerteventura':
                        return ['Antigua', 
                                'Betancuria', 
                                'La Oliva', 
                                'Pájara', 
                                'Puerto del Rosario',
                                'Tuineje'
                                ]
                    case 'Gran Canaria':
                        return ['Agaete', 
                                'Agüimes', 
                                'Artenara', 
                                'Arucas', 
                                'Firgas', 
                                'Gáldar', 
                                'Ingenio', 
                                'Mogán', 
                                'Moya', 
                                'Las Palmas de Gran Canaria', 
                                'San Bartolomé de Tirajana',
                                'La Aldea de San Nicolás',
                                'Santa Brígida',
                                'Santa Lucía de Tirajana',
                                'Santa María de Guía',
                                'Tejeda',
                                'Telde',
                                'Teror',
                                'Valsequillo',
                                'Valleseco',
                                'Vega de San Mateo'
                                ]
                    case 'La Gomera':
                        return ['Agulo',
                                'Alajeró',
                                'Hermigua',
                                'San Sebastián de La Gomera',
                                'Valle Gran Rey',
                                'Vallehermoso'
                                ]
                    case 'La Palma':
                        return ['Barlovento',
                                'Breña Alta',
                                'Breña Baja',
                                'Fuencaliente de la Palma',
                                'Garafía',
                                'Los Llanos de Aridane',
                                'El Paso',
                                'Puntagorda',
                                'Puntallana',
                                'San Andrés y Sauces',
                                'Santa Cruz de La Palma',
                                'Tazacorte',
                                'Tijarafe',
                                'Villa de Mazo'
                                ]
                    case 'Lanzarote':
                        return ['Arrecife',
                                'Haría',
                                'San Bartolomé',
                                'Teguise',
                                'Tías',
                                'Tinajo',
                                'Yaiza'
                                ]
                    case 'Tenerife':
                        return ['Adeje',
                                'Arafo',
                                'Arico',
                                'Arona',
                                'Buenavista del Norte',
                                'Candelaria',
                                'Fasnia',
                                'Garachico',
                                'Granadilla de Abona',
                                'La Guancha',
                                'Guía de Isora',
                                'Güimar',
                                'Icod de Los Vinos',
                                'San Cristóbal de La Laguna',
                                'La Matanza de Acentejo',
                                'La Orotava',
                                'Puerto de La Cruz',
                                'Los Realejos',
                                'El Rosario',
                                'San Juan de La Rambla',
                                'San Miguel de Abona',
                                'Santa Cruz de Tenerife',
                                'Santa Úrsula',
                                'Santiago del Teide',
                                'El Sauzal',
                                'Los Silos',
                                'Tacoronte',
                                'El Tanque',
                                'Tegueste',
                                'La Victoria de Acentejo',
                                'Vilaflor'
                                ]
                }
            } 
            return []
        },
    }
}


</script>