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
                    @change="$router.push({ query: { name: name },  name: 'beaches-results'})"
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
                    @change="$router.push({ query: { island: islandFilter },  name: 'beaches-results'})"
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
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="py-0">
                <v-select
                    v-model="placeType"
                    :items=placeTypes
                    clearable
                    outlined
                    dense
                    label="Tipo de lugar"
                ></v-select>
            </v-col>
        </v-row>
        <v-divider v-show="placeType != null"></v-divider>
        <div v-show="placeType == 'Playas'" class="mt-7">
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
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Playa nudista</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch v-model="nudismFilter"
                              class="ma-0"
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Bandera azul</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="blueFlagFiler"
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Socorrista</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="lifeGuardFilter"
                    ></v-switch>
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
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Duchas</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="showerFilter"
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Alquiler de sombrillas</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="rentalSunUmbrellaFilter"
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Alquiler de tumbonas</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="rentalHamocksFilter"
                        dense
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Alquiler de barcos</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="rentalBoatsFilter"
                        dense
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Comida</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="foodFilter"
                        dense
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Bebida</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="drinksFilter"
                        dense
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Zona para niños</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="childZoneFilter"
                        dense
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Zona deportiva</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="sportZoneFilter"
                        dense
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Submarinismo</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="scubaDivingFilter"
                        dense
                    ></v-switch>
                </v-col>
            </v-row>
            <v-row align-content="center">
                <v-col class="py-0 pt-1" cols="8">
                    <h4>Surf</h4>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="pa-0" cols="3">
                    <v-switch class="ma-0"
                        v-model="surfZoneFilter"
                        dense
                    ></v-switch>
                </v-col>
            </v-row>
        </div>
<div v-show="placeFilter == 1">
            <v-row>
                <v-col style="padding-bottom: 0">
                    <v-divider style="margin-bottom:20px"></v-divider>
                    <h4>Tipo de establecimiento</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Bar/Cafetería</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Restarante</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Guachinche</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="padding-bottom: 0">
                    <v-divider style="margin-bottom:20px"></v-divider>
                    <h4>Tipo de comida</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Típica</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Mediterránea</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Internacional</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
                       <v-row>
                <v-col style="padding-bottom: 0">
                    <v-divider style="margin-bottom:20px"></v-divider>
                    <h4>Especialidad</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Carne a la parrilla</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Sopas</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Pescado frito</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="padding-bottom: 0">
                    <v-divider style="margin-bottom:20px"></v-divider>
                    <h4>Comidas</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group v-model="model">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Desayuno</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Brunch</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Almuerzo</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Cena</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
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
        blueFlagFiler: null,
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
        placeType: null,
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
    },
}


</script>