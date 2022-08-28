<template>
    <div ref="main" style="width:100%;height:100%"></div>
</template>

<script>
const titlelocation = "center", legendlocation = "left";
export default {
    name: "Doughnut",
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
                    trigger: 'item',
                    textStyle: {
                        fontSize: arg.fontSize ? arg.fontSize : this.$fontSize,
                    }
                },
                series: [
                    {
                        name: arg.name ? arg.name : '',
                        type: 'pie',
                        radius: [this.$refs.main.clientWidth / 7 + "%", this.$refs.main.clientWidth / 9 + "%"],
                        avoidLabelOverlap: false,
                        left: "30%",
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: arg.fontSize ? arg.fontSize * 1.5 : this.$fontSize * 1.5,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: arg.data
                    }
                ]
            };
            arg.showlegend ? option.legend = {
                orient: 'vertical',
                left: arg.legendlocation ? arg.legendlocation : legendlocation,
                textStyle: {
                    fontSize: arg.fontSize ? arg.fontSize : this.$fontSize,
                },
                itemWidth: this.$refs.main.clientWidth / 25,
                itemHeight: this.$refs.main.clientHeight / 20,
                top: "10%",
            } : ""
            myChart.setOption(option);
        }
    }
}
</script>

<style>
</style>
