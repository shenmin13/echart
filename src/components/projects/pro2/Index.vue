<template>
  <Layout2>
    <template v-slot:left1>
      <BasicPie ref="left1"></BasicPie>
    </template>
    <template v-slot:left2>
      <BasicScatter ref="left2"></BasicScatter>
    </template>

    <template v-slot:center>
      <Choice ref="choice" @typeSelect="typeSelect" @initCenter="initCenter"></Choice>
      <AreaBlock ref="center"></AreaBlock>
    </template>

    <template v-slot:right1>
      <BasicRadar ref="right1"></BasicRadar>
    </template>
    <template v-slot:right2>
      <Doughnut ref="right2"></Doughnut>
    </template>

    <template v-slot:bottom1>
      <BasicLine ref="bottom1"></BasicLine>
    </template>
    <template v-slot:bottom2>
      <BasicBar ref="bottom2"></BasicBar>
    </template>
  </Layout2>
</template>

<script>
import Layout2 from '../../layout/Layout2.vue'
import BasicPie from '../../common/pie/BasicPie.vue'
import BasicBar from '../../common/bar/BasicBar.vue'
import BasicLine from '../../common/line/BasicLine.vue'
import BasicScatter from '../../common/scatter/BasicScatter.vue'
import BasicRadar from '../../common/radar/BasicRadar.vue'
import Doughnut from '../../common/pie/Doughnut.vue'
import AreaBlock from '../../common/gis/AreaBlock.vue'
import Choice from './Choice.vue'

export default {
  name: "pro2",
  components: {
    Layout2,
    BasicPie,
    BasicBar,
    BasicLine,
    BasicScatter,
    BasicRadar,
    Doughnut,
    AreaBlock,
    Choice
  },
  mounted() {
    this.initLeft1(this.$refs.left1)
    this.initLeft2(this.$refs.left2)

    this.initRight1(this.$refs.right1)
    this.initRight2(this.$refs.right2)

    this.initBottom1(this.$refs.bottom1)
    this.initBottom2(this.$refs.bottom2)
  }, 
  methods: {
    initLeft1(r) {
      const title = "饼图"
      const showlegend = false
      const data = [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }]
      r.init({
        title: title,
        data: data,
        showlegend: showlegend,
      })
    },
    initLeft2(r) {
      const title = "散点图"
      const data = [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ]
      r.init({
        title: title,
        data: data
      })
    },
   
    initRight1(r) {
      const basedata = [
        { name: '销售', max: 6500 },
        { name: '管理', max: 16000 },
        { name: '信息技术', max: 30000 },
        { name: '客户支持', max: 38000 },
        { name: '研发', max: 52000 },
        { name: '市场营销', max: 25000 }
      ]
      const data = [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '预算'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '开销'
        }
      ]
      r.init({
        data: data,
        basedata: basedata,
      })
    },
    initRight2(r) {
      const showlegend = true
      const data = [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
      r.init({
        data: data,
        showlegend: showlegend,
      })
    },

    initBottom1(r){
      const title = "折线图"
      const dataX = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      const dataY = [100, 52, 200, 334, 390, 330, 220]
      r.init({
        title: title,
        dataX: dataX,
        dataY: dataY,
      })
    },
    initBottom2(r){
      const title = "柱状图"
      const dataX = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      const dataY = [10, 52, 200, 334, 990, 330, 220]
      r.init({
        title: title,
        dataX: dataX,
        dataY: dataY,
      })
    },
    initCenter(points) {
      const map = "https://geo.datav.aliyun.com/areas_v3/bound/440000_full.json"
      const center = [113.196606,23.269088]
      this.$refs.center.init({ map: map, center: center, points: points, })
    },
    typeSelect(points) {
      this.$refs.center.drawMarker(points)
      this.$refs.center.drawPoint(points)
    }
  }
}
</script>
