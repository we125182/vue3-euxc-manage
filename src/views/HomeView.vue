<template>
  <div class="product-list page-content">内容区</div>
</template>

<script setup lang="ts">
onMounted(() => {
  fetch('/admin/api/yhadmin/captcha?tid=1643445503262')
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
});
</script>

<style lang="scss">
.product-list {
  background-color: #fff;
  padding: 20px;
}
</style>
