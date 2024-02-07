<template>
  <div class="homepage-container">
    <div class="header">
      <navigation></navigation>
    </div>
    <div class="main">
        <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup>
import Navigation from './module/Navigation.vue';
import { RouterView } from 'vue-router'
</script>

<style>

</style>