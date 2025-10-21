<template>
  <v-app>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>TechnoChile</v-toolbar-title>
      <v-spacer />
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
      <v-btn text to="/blog">Blog</v-btn>
    </v-app-bar>

  
    <v-main>
      <v-container class="pa-4 pt-12">
        <slot />
      </v-container>
    </v-main>

   
    <v-footer app color="primary" dark class="text-center">
      <span>© 2025 TechnoChile</span>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
