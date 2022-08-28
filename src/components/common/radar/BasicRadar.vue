<template>
    <div ref="main" style="width:100%;height:100%"></div>
</template>

<script>
const titlelocation = "center";
export default {
    name: "BasicRadar",
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
                    textStyle: {
                        fontSize: arg.fontSize ? arg.fontSize : this.$fontSize,
                    }
                },
                radar: {
                    indicator: arg.basedata,
                    radius: this.$refs.main.clientWidth / 7,
                    center: ['50%', '55%'],
                    name: {
                        textStyle: {
                            fontSize: arg.fontSize ? arg.fontSize : this.$fontSize,
                        }
                    },
                },
                series: [
                    {
                        type: 'radar',
                        data: arg.data,
                        radius: this.$refs.main.clientHeight / 7.5 + "%",
                        textStyle: {
                            fontSize: 18,
                        }
                    }
                ],
                legend:{
                    orient: 'vertical',
                    left:"left",
                    itemWidth: this.$refs.main.clientWidth / 25,
                    itemHeight: this.$refs.main.clientHeight / 20
                }
            };
            myChart.setOption(option);
        }
    }
}
</script>

<style>
</style>