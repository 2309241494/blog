<template>
    <menu class="menu" ref="menuRef">
        <button v-for="(item, index) in menuItems" :key="index" ref="menuItemRefs"
            :class="{ 'menu__item': true, 'active': changeIndex === index }" :style="`--bgColorItem: ${getColor(index)}`"
            @click="offsetMenuBorder(index)">
            <svg class="icon" :viewBox="item.viewBox">
                <path v-for="(path, pathIndex) in item.paths" :d="path" :key="pathIndex" />
            </svg>
        </button>
        <div class="menu__border" ref="menuBorderRef"></div>
    </menu>
    <div class="svg-container">
        <svg viewBox="0 0 202.9 45.5">
            <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
                <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
            </clipPath>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue';
import router from '../router';
const menuItems = ref([
    {
        bgColorItem: '#008c8c', viewBox: '0 0 24 24', paths: [
            'M3.8,6.6h16.4',
            'M20.2,12.1H3.8',
            'M3.8,17.5h16.4'
        ]
    },
    {
        bgColorItem: '#f54888', viewBox: '0 0 24 24', paths: [
            'M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z',
            'M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6'
        ]
    },
    {
        bgColorItem: '#4343f5', viewBox: '0 0 24 24', paths: [
            'M3.4,11.9l8.8,4.4l8.4-4.4',
            'M3.4,16.2l8.8,4.5l8.4-4.5',
            'M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z'
        ]
    },
    {
        bgColorItem: '#f5cae6', viewBox: '0 0 24 24', paths: [
            'M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9, 4.4, 4.4, 3.9, 5.1, 3.9z',
            'M4.2,9.3h15.6',
            'M9.1,9.5v10.3'
        ]
    },
    {
        bgColorItem: '#65ddb7', viewBox: '0 0 24 24', paths: [
            'M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9, 4.4, 4.4, 3.9, 5.1, 3.9z',
            'M5.5,20l9.9-9.9l4.7,4.7',
            'M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z'
        ]
    },
]);

const menuRef = ref<HTMLElement | null>(null);
const menuBorderRef = ref<HTMLElement | null>(null);
const menuItemRefs = ref<HTMLElement | null>(null)
const changeIndex = ref(0)
const getColor = computed(() => {
    return function (index: number) {
        return menuItems.value[index].bgColorItem
    }
});
function offsetMenuBorder(index: number) {
    changeIndex.value = index
    if (index === 0) {
        router.push('/vite-blog')
    } else if (index === 1) {
        router.push('/vite-blog/about')
    } else if (index === 2) {
        router.push('/vite-blog/blog')
    } else if (index === 3) {
        router.push('/vite-blog/project')
    } else {
        router.push('/vite-blog/photo')
    }
    let menuItems = menuItemRefs.value as HTMLElement[] | null;
    let menuItem = menuItems && menuItems[index];
    let left = menuItem?.offsetLeft;
    if (menuBorderRef.value !== null) {
        menuBorderRef.value.style.left = (left) + 'px';
    }
}
onMounted(() => {
    offsetMenuBorder(changeIndex.value);
});

// window.addEventListener('resize', () => {
// 	offsetMenuBorder(activeItem.value);
// 	menuRef!.value.style.setProperty('--timeOut', 'none');
// });
</script>

<style scoped lang='less'>
@bgColorMenu: #1d1d27;
@duration: .5s;
@bgColorItem: var(--bgColorItem);
@timeOut: .5s;

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    display: flex;
    height: 100vh;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background-color: #ffb457;
    -webkit-tap-highlight-color: transparent;
    transition: background-color @duration;
}

.menu {
    margin: 0;
    display: flex;
    /* Works well with 100% width  */
    width: 100%;
    font-size: 1.5em;
    padding: 0 20px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    justify-content: center;
    background-color: @bgColorMenu;
    z-index: 999;
    box-shadow:
        0px 0px 37px rgba(0, 0, 0, 0.51);

    &__item {
        all: unset;
        flex-grow: 1;
        z-index: 100;
        display: flex;
        cursor: pointer;
        position: relative;
        border-radius: 50%;
        will-change: transform;
        align-items: center;
        justify-content: center;
        padding: 0.55em 0 0.85em;
        transition: transform var(--timeOut, @duration);

        &::before {
            content: "";
            z-index: -1;
            width: 4.2em;
            height: 4.2em;
            border-radius: 50%;
            position: absolute;
            transform: scale(0);
            transition: background-color @duration, transform @duration;
        }

        &.active {
            transform: translate3d(0, -.8em, 0);

            &::before {
                transform: scale(1);
                background-color: @bgColorItem;
            }
        }

        .icon {
            width: 2.6em;
            height: 2.6em;
            stroke: white;
            fill: transparent;
            stroke-width: 1pt;
            stroke-miterlimit: 10;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 400;
        }

        &.active .icon {
            animation: strok 1.5s reverse;
        }

        @keyframes strok {
            100% {
                stroke-dashoffset: 400;
            }
        }
    }

    &__border {
        bottom: 99%;
        width: 10.5em;
        height: 2.4em;
        position: absolute;
        clip-path: url(#menu);
        will-change: transform;
        background-color: @bgColorMenu;
        transition: transform @timeOut, @duration;
        box-shadow:
            0px 0px 37px rgba(0, 0, 0, 0.51);
    }
}

.svg-container {
    width: 0;
}

@media screen and (max-width: 50em) {
    .menu {
        font-size: .8em;
    }
}
</style>