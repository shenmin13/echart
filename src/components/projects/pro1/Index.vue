<template>
  <div>
    <Layout1>
      <template v-slot:left1>
        <!-- <Digitalflop ref="left1"></Digitalflop> -->
        <BasicPie ref="left1"></BasicPie>
      </template>
      <template v-slot:left2>
        <BasicBar ref="left2"></BasicBar>
      </template>
      <template v-slot:left3>
        <BasicLine ref="left3"></BasicLine>
      </template>

      <template v-slot:center>
        <Choice ref="choice" @typeSelect="typeSelect" @initCenter="initCenter"></Choice>
        <AreaBlock ref="center"></AreaBlock>
      </template>

      <template v-slot:right1>
        <BasicScatter ref="right1"></BasicScatter>
      </template>
      <template v-slot:right2>
        <BasicRadar ref="right2"></BasicRadar>
      </template>
      <template v-slot:right3>
        <Doughnut ref="right3"></Doughnut>
      </template>

      <template v-slot:bottom1>
        <BasicScatter ref="bottom1"></BasicScatter>
      </template>
      <template v-slot:bottom2>
        <BasicRadar ref="bottom2"></BasicRadar>
      </template>
      <template v-slot:bottom3>
        <Doughnut ref="bottom3"></Doughnut>
      </template>
      <template v-slot:bottom4>
        <BasicLine ref="bottom4"></BasicLine>
      </template>

    </Layout1>
  </div>
</template>

<script>
import Layout1 from '../../layout/Layout1.vue'
import BasicPie from '../../common/pie/BasicPie.vue'
import BasicBar from '../../common/bar/BasicBar.vue'
import BasicLine from '../../common/line/BasicLine.vue'
import BasicScatter from '../../common/scatter/BasicScatter.vue'
import BasicRadar from '../../common/radar/BasicRadar.vue'
import Doughnut from '../../common/pie/Doughnut.vue'
import AreaBlock from '../../common/gis/AreaBlock.vue'
import Choice from './Choice.vue'

export default {
  name: "pro1",
  components: {
    Layout1,
    BasicBar,
    BasicLine,
    BasicScatter,
    BasicRadar,
    Doughnut,
    AreaBlock,
    Choice,
    BasicPie
},
  mounted() {
    this.initLeft1(this.$refs.left1)
    this.initLeft2(this.$refs.left2)
    this.initLeft3(this.$refs.left3)

    this.initRight1(this.$refs.right1)
    this.initRight2(this.$refs.right2)
    this.initRight3(this.$refs.right3)

    this.initRight1(this.$refs.bottom1)
    this.initRight2(this.$refs.bottom2)
    this.initRight3(this.$refs.bottom3)
    this.initLeft3(this.$refs.bottom4)
  },
  methods: {
    initLeft1(r) {
      const title = "??????"
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
      const title = "?????????"
      const dataX = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      const dataY = [10, 52, 200, 334, 990, 330, 220]
      r.init({
        title: title,
        dataX: dataX,
        dataY: dataY,
      })
    },
    initLeft3(r) {
      const title = "?????????"
      const dataX = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      const dataY = [100, 52, 200, 334, 390, 330, 220]
      r.init({
        title: title,
        dataX: dataX,
        dataY: dataY,
      })
    },
    initRight1(r) {
      const title = "?????????"
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
    initRight2(r) {
      const basedata = [
        { name: '??????', max: 6500 },
        { name: '??????', max: 16000 },
        { name: '????????????', max: 30000 },
        { name: '????????????', max: 38000 },
        { name: '??????', max: 52000 },
        { name: '????????????', max: 25000 }
      ]
      const data = [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '??????'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '??????'
        }
      ]
      r.init({
        data: data,
        basedata: basedata,
      })
    },
    initRight3(r) {
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
    initCenter(points) {
      const map = "https://gw.alipayobjects.com/os/bmw-prod/ecd1aaac-44c0-4232-b66c-c0ced76d5c7d.json"
      const center = [120, 28.932983]
      this.$refs.center.init({ map: map, center: center, points: points })
    },
    typeSelect(points) {
      this.$refs.center.drawMarker(points)
      this.$refs.center.drawPoint(points)
    }
  }
}
</script>
