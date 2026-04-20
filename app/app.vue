<script setup lang="ts">
// 使用 TypeScript 定義變數類型
const title: string = '歡迎來到 Nuxt 專案'
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>{{ title }}</h1>
    <NuxtWelcome />
  </div>
</template>

<style scoped>
h1 {
  font-family: sans-serif;
  text-align: center;
  color: #00dc82;
}
</style>
