<template>
    <div class="card-container ">
        <div class="card-wrap" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"
            ref="card">
            <div class="card" :style="cardStyle">
                <dvi class="card-bg" fit="cover" :style="[cardBgTransform, { backgroundImage: `url(${cardList!.icon})` }]">
                </dvi>
                <div class="card-info">
                    <h1 class="header">{{ cardList!.e_name }}</h1>
                    <p class="content">{{ cardList!.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
interface Props {
    cardList?: { icon: string; e_name: string; name: string }
}
const props = withDefaults(defineProps<Props>(), {
})

let mouseX = ref(0);
let mouseY = ref(0);
let card = ref();
let width = ref(0);
let height = ref(0);
let mouseLeaveDelay = ref()

let mousePX = computed(() => {
    return mouseX.value / width.value;
});
let mousePY = computed(() => {
    return mouseY.value / height.value;
});
let cardStyle = computed(() => {
    let rX = mousePX.value * 30;
    let rY = mousePY.value * -30;
    return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
    };
});

let cardBgTransform = computed(() => {
    let tX = mousePX.value * -40;
    let tY = mousePY.value * -30;
    return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
    };
});


let handleMouseMove = (e: any) => {
    mouseX.value = (e.pageX - card.value.offsetLeft - width.value) / 2 - 30;
    mouseY.value = (e.pageY - height.value) / 2 + -30;
};

let handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay.value);
};

let handleMouseLeave = () => {
    mouseLeaveDelay.value = setTimeout(() => {
        mouseX.value = 0;
        mouseY.value = 0;
    }, 1000);
};
onMounted(() => {
    width.value = card.value.offsetWidth;
    height.value = card.value.offsetHeight;
})
</script>

<style lang="less" scoped>
@hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
@returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.el-row {
    width: 100%;
}

.title {
    font-size: 24px;
    font-weight: 700;
    color: #5D4037;
    text-align: center;
}

p {
    line-height: 1.5em;
}

h1+p,
p+p {
    margin-top: 10px;
}

.container {
    padding: 40px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card-wrap {
    margin: 10px;
    transform: perspective(800px);
    transform-style: preserve-3d;
    cursor: pointer;

    &:hover {
        .card-info {
            transform: translateY(0);
        }

        .card-info p {
            opacity: 1;
        }

        .card-info,
        .card-info p {
            transition: 0.6s @hoverEasing;
        }

        .card-info:after {
            transition: 5s @hoverEasing;
            opacity: 1;
            transform: translateY(0);
        }

        .card-bg {
            transition:
                0.6s @hoverEasing,
                opacity 5s @hoverEasing;
            opacity: 1;
        }

        .card {
            transition:
                0.6s @hoverEasing,
                box-shadow 2s @hoverEasing;
            box-shadow:
                rgba(white, 0.2) 0 0 40px 5px,
                rgba(white, 1) 0 0 0 1px,
                rgba(black, 0.66) 0 30px 60px 0,
                inset #333 0 0 0 5px,
                inset white 0 0 0 6px;
        }
    }
}

.card {
    width: 100%;
    height: 350px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    transition: 1s @returnEasing;
    overflow: hidden;
    box-shadow:
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset rgba(white, 0.5) 0 0 0 6px;
}



.card-bg {
    opacity: 0.5;
    position: absolute;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    width: 110%;
    height: 110%;
    padding: 20px;
    transition: all 1s @returnEasing,
        opacity 5s 1s @returnEasing;
    pointer-events: none;
}

.card-info {
    padding: 20px;
    position: absolute;
    bottom: 0;
    color: #fff;
    transform: translateY(40%);
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

    p {
        opacity: 0;
        text-shadow: rgba(black, 1) 0 2px 3px;
        transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    * {
        position: relative;
        z-index: 1;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-blend-mode: overlay;
        opacity: 0;
        transform: translateY(100%);
        transition: 5s 1s @returnEasing;
    }
}

.card-info h1 {
    font-family: "Playfair Display";
    font-size: 36px;
    font-weight: 700;
    text-shadow: rgba(black, 0.5) 0 10px 10px;
}
</style>
