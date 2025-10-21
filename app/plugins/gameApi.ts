import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const gameApi = axios.create({
    baseURL: 'https://www.freetogame.com/api/',
  })

  nuxtApp.provide('gameApi', gameApi)
})
