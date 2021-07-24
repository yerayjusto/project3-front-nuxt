<template>
    <v-container fluid>
        <v-row>
            <v-col class="py-0">
                <v-text-field
                    v-model="name"
                    label="Nombre"
                    clearable
                    outlined
                    dense
                    @change="$router.push({ query: { ... query },  name: 'beaches-results'})"
                >
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="py-0">
                <v-select
                    v-model="islandFilter"
                    :items="islands"
                    clearable
                    outlined
                    dense
                    label="Isla"
                    @change="() => {
                        if (this.islandFilter === null) this.municipalityFilter = null
                        this.$router.replace({ query })
                    }"
                ></v-select>
            </v-col>
        </v-row>
        <v-row class="hidden-md-and-down">
            <v-col class="py-0">
                <v-autocomplete
                    v-model="municipalityFilter"
                    :items=municipality
                    clearable
                    outlined
                    dense
                    label="Municipio"
                    @change="$router.replace({ query })"
                ></v-autocomplete>
            </v-col>
        </v-row>
        <v-row class="hidden-lg-and-up">
            <v-col class="py-0">
                <v-select
                    v-model="municipalityFilter"
                    :items=municipality
                    clearable
                    outlined
                    dense
                    label="Municipio"
                    @change="$router.replace({ query })"
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="py-0">
                <v-select
                    v-model="placeFilter"
                    :items=placeTypes
                    clearable
                    outlined
                    dense
                    label="Tipo de lugar"
                    @change="$router.replace({ query })"
                ></v-select>
            </v-col>
        </v-row>
        <v-divider v-show="placeFilter != null"></v-divider>
        <div v-show="placeFilter == 'Playas'" class="mt-7">
            <v-row>
                <v-col class="py-0">
                    <v-select
                        v-model="occupationFilter"
                        :items="occupationGrade"
                        clearable
                        outlined
                        dense
                        label="Grado de ocupación"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <v-select
                        v-model="urbanizationFilter"
                        :items="urbanizationGrade"
                        clearable
                        outlined
                        dense
                        label="Grado de urbanización"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <v-select
                        v-model="sandTypeFilter"
                        :items="sandTypes"
                        clearable
                        outlined
                        dense
                        label="Tipo de playa"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <v-select
                        v-model="surgeFilter"
                        :items="surgeTypes"
                        clearable
                        outlined
                        dense
                        label="Oleaje"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <v-select
                        v-model="accessFilter"
                        :items="accessTypes"
                        clearable
                        outlined
                        dense
                        label="Tipos de acceso"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="pt-0">
                    <v-btn
                        block
                        elevation="1"
                        :color="nudismFilter? 'primary': 'normal'"
                        @click="nudismFilter = !nudismFilter"
                    >
                        Playa nudista
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="blueFlagFilter? 'primary': 'normal'"
                        @click="blueFlagFilter = !blueFlagFilter"
                    >
                        Bandera azul
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="lifeGuardFilter? 'primary': 'normal'"
                        @click="lifeGuardFilter = !lifeGuardFilter"
                    >
                        Socorrista
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="disabledAccessFilter? 'primary': 'normal'"
                        @click="disabledAccessFilter = !disabledAccessFilter"
                    >
                        Acceso minusválido
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="parkingFilter? 'primary': 'normal'"
                        @click="parkingFilter = !parkingFilter"
                    >
                        Parking
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="showerFilter? 'primary': 'normal'"
                        @click="showerFilter = !showerFilter"
                    >
                        Duchas
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="rentalSunUmbrellaFilter? 'primary': 'normal'"
                        @click="rentalSunUmbrellaFilter = !rentalSunUmbrellaFilter"
                    >
                        Alquiler sombrilla
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="rentalHamocksFilter? 'primary': 'normal'"
                        @click="rentalHamocksFilter = !rentalHamocksFilter"
                    >
                        Alquiler tumbona
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="rentalBoatsFilter? 'primary': 'normal'"
                        @click="rentalBoatsFilter = !rentalBoatsFilter"
                    >
                        Alquiler botes
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="foodsFilter? 'primary': 'normal'"
                        @click="foodsFilter = !foodsFilter"
                    >
                        Venta comida
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="drinksFilter? 'primary': 'normal'"
                        @click="drinksFilter = !drinksFilter"
                    >
                        Venta bebida
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="childZoneFilter? 'primary': 'normal'"
                        @click="childZoneFilter = !childZoneFilter"
                    >
                        Zona infantil
                    </v-btn>
                </v-col>
            </v-row>
             <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="sportsZoneFilter? 'primary': 'normal'"
                        @click="sportsZoneFilter = !sportsZoneFilter"
                    >
                        Zona deportiva
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="scubaDivingFilter? 'primary': 'normal'"
                        @click="scubaDivingFilter = !scubaDivingFilter"
                    >
                        Submarinismo
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        block
                        elevation="1"
                        :color="surfZoneFilter? 'primary': 'normal'"
                        @click="surfZoneFilter = !surfZoneFilter"
                    >
                        Surf
                    </v-btn>
                </v-col>
            </v-row>
        </div>
        <div v-show="placeFilter == 'Restaurantes'" class="mt-7">
            <v-row>
                <v-col class="py-0">
                    <v-text-field
                        v-model="name"
                        label="Platos"
                        clearable
                        outlined
                        dense
                        @change="$router.push({ query: { ... query },  name: 'beaches-results'})"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <v-select
                        v-model="accessFilter"
                        :items="accessTypes"
                        clearable
                        outlined
                        dense
                        label="Tipo de establecimiento"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <v-select
                        v-model="accessFilter"
                        :items="accessTypes"
                        clearable
                        outlined
                        dense
                        label="Tipo de comida"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <v-select
                        v-model="accessFilter"
                        :items="accessTypes"
                        clearable
                        outlined
                        dense
                        label="Especialidad"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <v-select
                        v-model="accessFilter"
                        :items="accessTypes"
                        clearable
                        outlined
                        dense
                        label="Servicio"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Acceso para discapacitados</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="disabledAccessFilter"
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Parking</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="parkingFilter"
                    ></v-switch>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        name: null,
        islandFilter: null,
        municipalityFilter: null,
        placeFilter: null,
        occupationFilter: null,
        urbanizationFilter: null,
        sandTypeFilter: null,
        surgeFilter: null,
        accessTypeFilter: null,
        nudismFilter: null,
        blueFlagFilter: null,
        lifeGuardFilter: null,
        disabledAccessFilter: null,
        parkingFilter: null,
        showerFilter: null,
        rentalSunUmbrellaFilter: null,
        rentalHamocksFilter: null,
        rentalBoatsFilter: null,
        foodFilter: null,
        drinksFilter: null,
        childZoneFilter: null,
        sportZoneFilter: null,
        scubaDivingFilter: null,
        surfZoneFilter: null,
        islands: ['El Hierro',
                  'Fuerteventura',
                  'Gran Canaria',
                  'La Gomera',
                  'La Palma',
                  'Lanzarote',
                  'Tenerife'
                 ],
        placeTypes: ['Playas',
                    'Restaurantes',
                    'Museos',
                    'Miradores'
                    ],
        occupationGrade: ['Alto',
                          'Medio',
                          'Bajo'
                         ],
        urbanizationGrade: ['Urbana',
                            'Semiurbana',
                            'Aislada'
                           ],
        sandTypes: ['Arena negra',
                    'Arena blanca',
                    'Piedras'
                   ],
        surgeTypes: ['Oleaje fuerte',
                 'Oleaje moderado',
                 'Aguas tranquilas'
                ],
        accessTypes: ['A pie fácil',
                     'A pie dificil',
                     'Coche',
                     'Barco'
                    ],
        establishmentTypes: ['Bar/cafetería',
                             'Restaurante',
                             'Guanchinche']
    }),
    computed: {
        municipality () {
            if (this.islandFilter) {
                switch(this.islandFilter){
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
        query() {
            const query = {}
            if (this.name !== null && this.name !== '') query.name = this.name
            if (this.islandFilter !== null) {
                query.island = this.islandFilter
                if (this.municipalityFilter !== null) query.municipality = this.municipalityFilter
            }
            if (this.placeFilter !== null) {
                if (this.placeFilter === 'Playas') query.placeType = 'beaches'
                if (this.placeFilter === 'Restaurantes') query.placeType = 'restaurants'
                if (this.placeFilter === 'Museos') query.placeType = 'museums'
                if (this.placeFilter === 'Miradores') query.placeType = 'viewpoints'
            }
            return query
        }
    },
    mounted(){
        this.name = this.$route.query.name
            if (this.$route.query.placeType !== null) {
                if (this.$route.query.placeType === 'beaches') this.placeFilter = 'Playas'
                if (this.$route.query.placeType === 'restaurants') this.placeFilter = 'Restaurantes'
                if (this.$route.query.placeType === 'museums') this.placeFilter = 'Museos'
                if (this.$route.query.placeType === 'viewpòints') this.placeFilter = 'Miradores'
            }
    }
}
</script>