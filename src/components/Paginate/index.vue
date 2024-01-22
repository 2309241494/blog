<template>
    <div class='Paginate-container'>
        <div class="counter">
            <span>{{ index + 1 }}</span><i class="bias">/</i><span>{{ total }}</span>
        </div>
        <button ref="left" class="paginate left " :data-state="isLeftDisabled ? 'disabled' : ''"
            @click="slide(-1)"><i></i><i></i></button>
        <button ref="right" class="paginate right" :data-state="isRightDisabled ? 'disabled' : ''"
            @click="slide(1)"><i></i><i></i></button>
    </div>
</template>

<script setup lang="ts">
interface PaginateProps {
    /** 当前页码 */
    currentPage: number;
    /** 总页数 */
    totalPage: number;
}
const props = withDefaults(defineProps<PaginateProps>(), {
});
import { ref, computed, onMounted, watch, toRef } from 'vue';
const left = ref<HTMLElement | null>(null);
const right = ref<HTMLElement | null>(null);
let index = ref(0);
let total = ref(0);
const isLeftDisabled = computed(() => index.value === 0);
const isRightDisabled = computed(() => index.value === total.value - 1);

watch(
    [toRef(props, 'currentPage'), toRef(props, 'totalPage')],
    ([currentPage, totalPage]) => {
        index.value = currentPage;
        total.value = totalPage;
    }
);
const emit = defineEmits(["changeCurrentPage"])
function slide(offset: any) {
    index.value = Math.min(Math.max(index.value + offset, 0), total.value);
    emit('changeCurrentPage', index.value + 1);
}
slide(0);
</script>

<style scoped lang='less'>
@size: 50px;
@thickness: 5px;
@angle: 40deg;
@angleHover: 30deg;
@angleActive: 25deg;

.bias {
    margin: 0 10px;
}

.arrowTransform(@angle, @x: 0, @y: 0) {
    i:first-child {
        transform: translate(@x, @y) rotate(@angle);
    }

    i:last-child {
        transform: translate(@x, -@y) rotate(-@angle);
    }
}

.Paginate-container {
    width: 100%;
    position: relative;
    margin-top: 70px;
    height: 70px;
}

button {
    background: transparent;
    border: 0;
    outline: 0;
}

.paginate {
    margin: 10px;
    width: @size;
    height: @size;
    cursor: pointer;
    transform: translate3d(0, 0, 0); // fixes flicker in webkit

    position: absolute;
    top: 50%;
    margin-top: -20px;
    // -webkit-filter: drop-shadow(0 2px 0px rgba(0, 0, 0, 0.2));

    i {
        position: absolute;
        top: 40%;
        left: 0;
        width: @size;
        height: @thickness;
        border-radius: @thickness / 2;
        background: #fff;

        transition: all 0.15s ease;
    }

    &.left {
        right: 58%;

        i {
            transform-origin: 0% 50%
        }

        .arrowTransform(@angle, 0, -1px);

        &:hover {
            .arrowTransform(@angleHover, 0, -1px);
        }

        &:active {
            .arrowTransform(@angleActive, 1px, -1px);
        }

        &[data-state=disabled] {
            .arrowTransform(0deg, -5px, 0);

            &:hover {
                .arrowTransform(0deg, -5px, 0);
            }
        }
    }

    &.right {
        left: 58%;

        i {
            transform-origin: 100% 50%
        }

        .arrowTransform(@angle, 0, 1px);

        &:hover {
            .arrowTransform(@angleHover, 0, 1px);
        }

        &:active {
            .arrowTransform(@angleActive, 1px, 1px);
        }

        &[data-state=disabled] {
            .arrowTransform(0deg, 5px, 0);

            &:hover {
                .arrowTransform(0deg, 5px, 0);
            }
        }
    }

    &[data-state=disabled] {
        opacity: 0.3;
        cursor: default;
    }
}

.counter {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    margin-top: -15px;
    font-size: 30px;
    font-family: Helvetica, sans-serif;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.2);
    color: #fff;
}
</style>