<template>
    <div id="bar1"  style="width: 600px;height: 400px;">></div>
</template>

<script>
    import * as echarts from "echarts";
    export default {
        name: "Bar1",
        data() {
            return {
                myChart: null,
            };
        },
        mounted() {
            this.myChart = echarts.init(document.getElementById("bar1"));
            this.myChart.setOption({
                title: {
                    text: "Echarts 入门示例",
                },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            });
        }
    }
</script>

<style scoped>

</style>