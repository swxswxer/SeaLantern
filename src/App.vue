<script setup lang="ts">
import { ref } from "vue";
import AppLayout from "./components/layout/AppLayout.vue";
import SplashScreen from "./components/splash/SplashScreen.vue";

const showSplash = ref(true);

function handleSplashReady() {
  // 立即淡出，不额外延迟
  showSplash.value = false;
}
</script>

<template>
  <transition name="splash-fade">
    <SplashScreen v-if="showSplash" @ready="handleSplashReady" />
  </transition>
  <AppLayout v-if="!showSplash" />
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* 启动画面淡出动画 */
.splash-fade-leave-active {
  transition: opacity 0.3s ease;
}

.splash-fade-leave-to {
  opacity: 0;
}
</style>
