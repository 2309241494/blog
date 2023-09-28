<template>
    <div class='panel-group-container'>
        <el-row :gutter="40" class="panel-group">
            <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                <div class="card-panel">
                    <div class="card-panel-icon-wrapper icon-people">
                        <el-icon class="icon">
                            <Collection />
                        </el-icon>
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            站点访问量
                        </div>
                        <count-to :start-val="0" :end-val="3000" :duration="2000" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                <div class="card-panel">
                    <div class="card-panel-icon-wrapper icon-message">
                        <el-icon class="icon">
                            <Guide />
                        </el-icon>
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            学习时间
                        </div>
                        <count-to :start-val="0" suffix="天" :end-val="2000" :duration="2000" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                <div class="card-panel">
                    <div class="card-panel-icon-wrapper icon-money">
                        <el-icon class="icon">
                            <Operation />
                        </el-icon>
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            工作时间
                        </div>
                        <count-to :start-val="0" suffix="天" :end-val="1200" :duration="2000" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { CountTo } from 'vue3-count-to';
import { Operation, Collection, Guide } from '@element-plus/icons-vue'
onMounted(() => {
})
</script>

<style scoped lang='less'>
.panel-group-container {

    .panel-group {
        display: flex;

        .card-panel-col {
            margin-bottom: 32px;
        }

        .card-panel {
            height: 108px;
            cursor: pointer;
            font-size: 12px;
            position: relative;
            overflow: hidden;
            color: #666;
            background: #363b5f;
            box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
            border-color: rgba(0, 0, 0, .05);
            border-radius: 6px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &:hover .card-panel-icon-wrapper .icon {
                background-color: #ffffff;
            }

            &:hover .icon-money {
                color: #30d179;
            }

            &:hover .icon-message {
                color: #3e40a1;
            }

            &:hover .icon-people {
                color: #2354f5;
            }

            .card-panel-icon-wrapper {

                .icon {
                    font-size: 70px;
                    background-color: #2c3051;
                    padding: 8px;
                    border-radius: 5px;
                    transition: all 0.3s;
                    font-weight: bold;
                }
            }

            .icon-message {
                color: #008c8c;
            }

            .icon-people {
                color: #36a3f7;
            }

            .icon-money {
                color: #f4516c;
            }

            .card-panel-description {
                font-weight: bold;
                margin-left: 0px;

                .card-panel-text {
                    line-height: 18px;
                    color: #f3f3f3;
                    font-size: 16px;
                    margin-bottom: 12px;
                }

                .card-panel-num {
                    font-size: 25px;
                    color: #4bd3f5;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>