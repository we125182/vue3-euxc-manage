<template>
  <aside :class="className">
    <div class="g-aside__content">侧边栏</div>
  </aside>
</template>

<script setup lang="ts">
const props = defineProps<{
  fixed?: boolean;
}>();
const className = computed(() => {
  return {
    'g-aside': true,
    'g-aside--fixed': props.fixed,
  };
});
</script>

<style lang="scss">
.g-aside {
  width: $aside-width;
  flex-shrink: 0;

  &--fixed {
    .g-aside__content {
      position: fixed;
      z-index: 50;
      top: 0;
      left: 0;
      width: $aside-width;
      height: 100%;
      overflow: auto;
      background-color: #fff;
      box-shadow: inset -1px 0px 0 0 #e6e6e6;
    }
  }
}
</style>
