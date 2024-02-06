<template>
  <div class="navigation-container">
    <!-- 导航栏内容 -->
    <div class="nav" v-for="(item,index) in navigations" :key="index" @click="handlerClick(item, index)" :class="{'is-active': activeIndex ==index}">
        <span class="label">{{ item.name }}</span>
    </div>

  </div>
</template>

<script setup>
import { ref ,onMounted} from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigations = [
    { name: '首页', url: '/' },
    { name: 'API市场', url: '/api-market' },
    { name: '需求大厅', url: '/demand-hall' },
    { name: '关于我们', url: '/about-us' },
];
const activeIndex = ref(0);
const handlerClick = (item, index) => {
    // 处理点击事件
    activeIndex.value = index;
    console.log(item, index);
    router.push(item.url);
}
onMounted(() => {
    // 处理初始化选中状态
    const path = router.currentRoute.value.path;
    navigations.forEach((item, index) => {
        if (path === item.url) {
            activeIndex.value = index;
        }
    });
});
</script>

<style lang="less"  scoped>
.navigation-container {
    background: #f2f2f4;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav{
    margin: 0px 20px;
    position: relative;
    padding: 10px;
    // padding-bottom: 10px;
}

.nav:hover{
    cursor: pointer;
    .label::after {
        transform: scaleX(0.95);
    }
}
.is-active{
    .label::after {
        transform: scaleX(0.95);
    }
}

.label::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 4px;
    background-image: linear-gradient(to right, #149721, #8b7d00, #cd4b00, #e7005b, #b617bb);
    transform: scaleX(0);
    transform-origin: 50% 50%;
    transition: transform .5s ease;
}

</style>