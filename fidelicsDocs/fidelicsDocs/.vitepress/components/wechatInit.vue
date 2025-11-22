<!-- .vitepress/components/wechatInit.vue -->
<!-- 设置该网站在微信分享页面时生成卡片内容 -->
<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

// 你要执行的核心逻辑（每次页面切换都跑一次）
const wechatInit = () => {
  const title = document.title
 // 第 1 个 JS：/js/a.js → window.A.init(title)
    const s1 = document.createElement('script')
    s1.src = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js'
    document.head.appendChild(s1)

    const s2 = document.createElement('script')
    s2.src = 'https://fidelics.cn/js/wechatShare.js'
    document.head.appendChild(s2)

    initWx(title, "获取最新文档、教程、视频等快速入门Fidelics软件", "https://fidelics.cn/images/logos/64x64.ico");
}

// 第一次加载执行一次
onMounted(wechatInit)

// 每次路由变化都执行一次（包括 hash 变化）
watch(
  () => route.path + route.hash,
  () => {
    // 小技巧：加上 setTimeout 0 可以确保 DOM 和 title 已经完全更新
    setTimeout(wechatInit, 0)
  }
)
</script>

<template />