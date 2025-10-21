<template>
  <v-container>
    <h1 class="text-h4 mb-6">Lista de juegos gratuitos</h1>
    <v-row dense>
      <v-col
        v-for="game in games"
        :key="game.id"
        cols="12" sm="6" md="4"
      >
        
        <v-card
          class="pa-2"
          :to="`/game/${game.id}`"
          hover
          clickable
        >
          <v-img :src="game.thumbnail" height="200px" class="mb-2"/>
          <v-card-title class="text-subtitle-1">{{ game.title }}</v-card-title>
          <v-card-subtitle class="text-caption">{{ game.genre }} - {{ game.platform }}</v-card-subtitle>
          <v-card-actions>
            <v-btn :href="game.game_url" target="_blank" color="primary" variant="outlined">
              Jugar en línea
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { AxiosInstance } from 'axios'


interface Game {
  id: number
  title: string
  thumbnail: string
  genre: string
  platform: string
  game_url: string
}


const nuxtApp = useNuxtApp()
const $gameApi = nuxtApp.$gameApi as AxiosInstance


const { data: games } = await useAsyncData<Game[]>('games', async () => {
  const res = await $gameApi.get('games') 
  return res.data.slice(0, 12)
})
</script>
