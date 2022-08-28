<template>
    <div ref="main" style="width:100%;height:100%"></div>
</template>

<script>
const titlelocation = "center";
export default {
    name: "BasicBar",
    data() {
        return {

        }
    },
    methods: {
        init(arg) {
            const chartDom = this.$refs.main;
            const myChart = this.$echarts.init(chartDom, arg.style ? arg.style : this.$style);

            const option = {
                title: {
                    text: arg.title ? arg.title : '',
                    subtext: arg.fu_title ? arg.fu_title : '',
                    left: arg.titlelocation ? arg.titlelocation : titlelocation,
                    textStyle: {
                        fontSize: arg.fontSize ? arg.fontSize : this.$fontSize,
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: arg.dataX,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Direct',
                        type: 'bar',
                        barWidth: '60%',
                        data: arg.dataY,
                    }
                ]
            };
            myChart.setOption(option);
        }
    }
}
</script>

<style>
</style>