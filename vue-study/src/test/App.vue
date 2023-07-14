<template>
    <button  @click="openDrawer">打开</button>
    <tiny-drawer v-model:visible="drawerVisible" title="OpenTiny是什么" dragable>
        <!-- 默认插槽的内容是可以自行定义，比如：可以是表格行的详情内容 -->
        <p>OpenTiny 是一套华为云出品的企业级组件库解决方案，适配 PC 端 / 移动端等多端，涵盖 Vue2 / Vue3 / Angular 多技术栈，拥有主题配置系统 / 中后台模板 / CLI 命令行等效率提升工具，可帮助开发者高效开发 Web 应用。</p>
    </tiny-drawer>
</template>

<script setup>
import TinyDrawer from '@opentiny/vue-drawer'
import { ref } from 'vue';

const drawerVisible = ref(false)
const openDrawer = () => {
  drawerVisible.value = true
}
</script>

<style scoped>
    
</style>