<template>
    <div class='LineChart-container'>
        <div id="main" style="width: 100%"></div>
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
    var myChart = echarts.init(document.getElementById('main'));
    var charts = {
        // 按顺序排列从大到小
        cityList: ["笔记资源", "图片资源", "项目资源", "16号点", "24号点"],
        cityData: [7500, 6200, 5700, 4200, 3500],
    };
    var top10CityList = charts.cityList;
    var top10CityData = charts.cityData;
    var color = [
        "rgba(248,195,248",
        "rgba(100,255,249",
        "rgba(135,183,255",
        "rgba(67,67,245",
        "rgba(245,72,136",
    ];

    let lineY = [];
    for (var i = 0; i < charts.cityList.length; i++) {
        var x = i;
        if (x > color.length - 1) {
            x = color.length - 1;
        }
        var data = {
            name: charts.cityList[i],
            color: color[x] + ")",
            value: top10CityData[i],
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                            {
                                offset: 0,
                                color: color[x] + ", 0.3)",
                            },
                            {
                                offset: 1,
                                color: color[x] + ", 1)",
                            },
                        ],
                        false
                    ),
                    barBorderRadius: 10,
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: "rgba(0, 0, 0, 0.1)",
                },
            },
        };
        lineY.push(data);
    }
    var option: any = {
        backgroundColor: "#363b5f",
        title: {
            show: false,
        },
        tooltip: {
            trigger: "item",
        },
        grid: {
            borderWidth: 0,
            top: "10%",
            left: "5%",
            // right: "15%",
            bottom: "3%",
        },
        color: color,
        yAxis: [
            {
                type: "category",
                inverse: true,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    inside: false,
                },
                data: top10CityList,
            },
            {
                type: "category",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    inside: false,
                    textStyle: {
                        color: "#b3ccf8",
                        fontSize: "14",
                        fontFamily: "PingFangSC-Regular",
                    },
                    formatter: function (val: any) {
                        console.log(val)
                        return `${val} 项`;
                    },
                },
                splitArea: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                data: top10CityData.reverse(),
            },
        ],
        xAxis: {
            type: "value",
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        series: [
            {
                name: "",
                type: "bar",
                zlevel: 2,
                barWidth: "10px",
                data: lineY,
                animationDuration: 1500,
                label: {
                    normal: {
                        color: "#b3ccf8",
                        show: true,
                        position: [0, "-24px"],
                        textStyle: {
                            fontSize: 16,
                        },
                        formatter: function (a: { name: any; }, b: any) {
                            return a.name;
                        },
                    },
                },
            },
        ],
        animationEasing: "cubicOut",
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
</script>

<style scoped lang='less'>
#main {
    box-shadow: 5px 5px 17px #252844,
        -5px -5px 17px #33385e;
    margin-bottom: 30px;
    border-radius: 5px;
    overflow: hidden;
    height: 400px;
}
</style>