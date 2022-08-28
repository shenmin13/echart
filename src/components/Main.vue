<template>
  <div class="main">
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>

export default {
  name: 'Main',
}
</script>

<style scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>