<template>
    <div ref="main" style="width:100%;height:100%"></div>
</template>

<script>
const titlelocation = "center", legendlocation="left";
export default {
    name: "BasicPie",
    data(){
        return {
        }
    },
    methods: {
        init(arg) {
            const chartDom = this.$refs.main;
            const myChart = this.$echarts.init(chartDom,arg.style ? arg.style : this.$style);
            const option = {
                title: {
                    text: arg.title ? arg.title : '',
                    subtext: arg.fu_title ? arg.fu_title : '',
                    left: arg.titlelocation ? arg.titlelocation : titlelocation,
                    textStyle:{
                        fontSize:arg.fontSize ? arg.fontSize : this.$fontSize,
                    }
                },
                tooltip: {
                    trigger: 'item',
                    textStyle:{
                        fontSize:arg.fontSize ? arg.fontSize : this.$fontSize 
                    }
                },
                series: [
                    {
                        name: arg.tooltiptext ? arg.tooltiptext : '',
                        type: 'pie',
                        radius: this.$refs.main.clientWidth/7+"%",
                        data: arg.data ? arg.data : [],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            arg.showlegend ? option.legend = {
                    orient: 'vertical',
                    left: arg.legendlocation ? arg.legendlocation : legendlocation,
                    textStyle:{
                        fontSize:arg.fontSize ? arg.fontSize : this.$fontSize
                    },
                    itemWidth: this.$refs.main.clientWidth / 25,
                    itemHeight: this.$refs.main.clientHeight / 20
                } : ""
            myChart.setOption(option);
        }
    }
}
</script>

<style>
</style>