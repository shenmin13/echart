<template>
  <div class="tab">
    <el-button type="primary" icon="el-icon-d-arrow-right" circle @click="drawer = true"></el-button>
    <el-drawer :direction="direction" :visible.sync="drawer" :with-header="false" size="20%">

      <div class="nav">
        <router-link to='/pro1'>chart3-3-4</router-link>
        <router-link to='/pro2'>chart2-2-2</router-link>
        <router-link to='/pro3'>cesium</router-link>
      </div>

    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {
      drawer: false,
      direction: 'ltr',
      tabPosition: 'left'
    };
  }
}
</script>
<style lang="less" scoped>
.tab {
  position: fixed;
  top: 10px;
  left: 0;
  z-index: 3000;

  .nav {
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .nav a {
    padding: 10px 20px;
    color: #000;
    text-decoration:none;
  }

  .nav a.router-link-exact-active {
    background-color: #409EFF;
    color: #fff;
  }
}
</style>