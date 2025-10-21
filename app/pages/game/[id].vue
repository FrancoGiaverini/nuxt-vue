<template>
  <v-container class="pa-4">
    <v-btn text color="primary" to="/">← Volver</v-btn>
    <v-card class="pa-4 mt-4">
      <v-img :src="game.thumbnail" height="300px" />
      <v-card-title class="text-h5">{{ game.title }}</v-card-title>
      <v-card-subtitle>{{ game.genre }} - {{ game.platform }}</v-card-subtitle>
      <v-card-text class="mt-2">{{ game.short_description }}</v-card-text>
      <v-card-actions>
        <v-btn :href="game.game_url" target="_blank" color="primary">
          Jugar en línea
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import type { AxiosInstance } from 'axios'


interface GameDetail {
  id: number
  title: string
  thumbnail: string
  genre: string
  platform: string
  game_url: string
  short_description: string
}


const nuxtApp = useNuxtApp()
const $gameApi = nuxtApp.$gameApi as AxiosInstance


const route = useRoute()
const id = route.params.id as string

const { data: game } = await useAsyncData<GameDetail>(`game-${id}`, async () => {
  const res = await $gameApi.get(`game?id=${id}`) 
  return res.data
})
</script>

