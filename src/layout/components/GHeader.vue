<template>
  <header :class="className">
    <div class="g-header__content">头部</div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  fixed?: boolean;
}>();

const className = computed(() => {
  return {
    'g-header': true,
    'g-header--fixed': props.fixed,
  };
});
</script>

<style lang="scss">
.g-header {
  flex-shrink: 0;
  height: $header-height;

  &--fixed {
    .g-header__content {
      position: fixed;
      z-index: 10;
      top: 0;
      right: 0;
      left: 0;
      height: $header-height;
      padding-left: $aside-width;
      background-color: #fff;
      box-shadow: inset 0 -1px 0 0 #e6e6e6;
    }
  }
}
</style>
