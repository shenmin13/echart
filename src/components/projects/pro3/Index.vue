<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
var viewer = null
export default {
  name: "pro3",
  data() {
    return {}
  },
  mounted() {
    // Cesium.Ion.defaultAccessToken = '<YOUR ACCESS TOKEN HERE>'
    // viewer = new Cesium.CesiumWidget('cesiumContainer')
    viewer = new Cesium.Viewer("cesiumContainer")

    // console.log(viewer)
  },
}
</script>
<style scoped>
.map-box {
  width: 100%;
  height: 100%;
}
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>