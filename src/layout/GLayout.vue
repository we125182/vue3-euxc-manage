<template>
  <section class="g-layout">
    <GAside fixed></GAside>
    <section class="g-layout__container">
      <GHeader fixed></GHeader>
      <main class="g-layout-content">
        <router-view></router-view>
      </main>
    </section>
  </section>
</template>

<script setup lang="ts">
import GHeader from './components/GHeader.vue';
import GAside from './components/GAside.vue';
</script>

<style lang="scss">
.g-layout {
  display: flex;
  height: 100%;

  &__container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &-content {
    flex: 1;
    padding: 20px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
  }
}
</style>
