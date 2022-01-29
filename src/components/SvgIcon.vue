<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  color?: string;
}>();

const symbolId = computed(() => {
  return `#icon-${props.name}`;
});
</script>

<style lang="scss">
.svg-icon {
  height: 1em;
  width: 1em;
}
</style>
