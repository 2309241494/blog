<template>
    <div class='LineChart-container'>
        <div id="radar" style="width: 100%"></div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted, reactive } from 'vue';

onMounted(
    () => {
        init()
    }
)
const init = () => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('radar'));
    const option: any = {
        // title: {
        //     text: "雷达图",
        // },
        tooltip: {},
        // legend: {
        //     top: 20,
        //     itemWidth: 12,
        //     itemHeight: 12,
        //     data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"],
        //     textStyle: {
        //         color: "#fff",
        //     },
        // },
        radar: {
            radius: "60%",
            splitNumber: 8,
            axisLine: {
                lineStyle: {
                    color: "#fff",
                    opacity: 0.2,
                },
            },
            splitLine: {
                lineStyle: {
                    color: "#fff",
                    opacity: 0.2,
                },
            },
            splitArea: {
                areaStyle: {
                    color: "rgba(127,95,132,.3)",
                    opacity: 1,
                    shadowBlur: 45,
                    shadowColor: "rgba(0,0,0,.5)",
                    shadowOffsetX: 0,
                    shadowOffsetY: 15,
                },
            },
            indicator: [
                {
                    name: "javaScript",
                    max: 6000,
                },
                {
                    name: "CSS",
                    max: 16000,
                },
                {
                    name: "HTML",
                    max: 30000,
                },
                {
                    name: "VUE",
                    max: 35000,
                },
                {
                    name: "React",
                    max: 50000,
                },
                {
                    name: "uniapp",
                    max: 25000,
                },
            ],
        },
        series: [
            {
                name: "预算 vs 开销（Budget vs spending）",
                type: "radar",
                symbolSize: 0,
                areaStyle: {
                    normal: {
                        shadowBlur: 13,
                        shadowColor: "rgba(0,0,0,.2)",
                        shadowOffsetX: 0,
                        shadowOffsetY: 10,
                        opacity: 1,
                    },
                },
                data: [
                    {
                        value: [5000, 7000, 12000, 11000, 15000, 14000],
                        name: "个人技能情况",
                    },
                ],
            },
        ],
        color: ["#ef4b4c", "#b1eadb"],
        backgroundColor: {
            type: "radial",
            x: 0.4,
            y: 0.4,
            r: 0.35,
            colorStops: [
                {
                    offset: 0,
                    color: "#895355", // 0% 处的颜色
                },
                {
                    offset: 0.4,
                    color: "#593640", // 100% 处的颜色
                },
                {
                    offset: 1,
                    color: "#39273d", // 100% 处的颜色
                },
            ],
            globalCoord: false, // 缺省为 false
        },
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
</script>

<style scoped lang='less'>
#radar {
    box-shadow: 5px 5px 17px #252844,
        -5px -5px 17px #33385e;
    margin-bottom: 30px;
    border-radius: 5px;
    overflow: hidden;
    height: 350px;
}
</style>