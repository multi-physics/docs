<!-- .vitepress/components/VideoPlayer.vue -->
<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  tag: { type: String, default: "" },
  title: { type: String, default: ""},
  desc: { type: String, default: "" },
  nativeControls: { type: Boolean, default: false },  // Use browser's default controls?
  loop: { type: Boolean, default: false },
  width: { type: Number, default: 640 },
  height: { type: Number, default: 360 },
  autoplay: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  poster: { type: String, default: '' },
  preload: { type: String, default: 'auto' }  // 'none', 'metadata', or 'auto'
})

// 预定义彩色数组（柔和色调，适合暗黑模式）
const tagColors = [
  '#FF6B6B',  // 红
  '#4ECDC4',  // 绿
  '#45B7D1',  // 蓝
  '#FFA07A',  // 橙
  '#98D9E9',  // 青
  '#C56CFF',  // 紫
]

const tagsArray = computed(() => {
  if (props.tag=="") return []  // 空 tag 返回空数组，不渲染
  return props.tag.split(',').map(t => t.trim()).filter(t => t)  // 拆分、去空格、滤空
})

const getTagColor = (index) => {
  return tagColors[index % tagColors.length]  // 循环用，标签多也不溢出
}

const videoRef = ref(null)

// 全局互斥播放核心逻辑
const pauseAllOthers = (current) => {
  document.querySelectorAll('video').forEach(v => {
    if (v !== current && !v.paused) {
      v.pause()
    }
  })
}

onMounted(() => {
  const video = videoRef.value
  if (!video) return

  const handler = () => pauseAllOthers(video)
  video.addEventListener('play', handler)

  // 额外：点击视频区域直接播放（防浏览器政策）
  video.addEventListener('click', () => {
    if(!v.paused){
       video.play().catch(() => {})  // 忽略 autoplay 错误
    }   
  })

  onUnmounted(() => {
    video.removeEventListener('play', handler)
    video.removeEventListener('click', () => {})
  })
})

</script>

<template>
  <div class="vp-video-player">
    <!-- 标签（可选） -->
     <div v-if="tagsArray.length > 0" class="vp-tags-container">
      <div v-for="(subTag, index) in tagsArray" :key="index" class="vp-tag" :style="{ background: getTagColor(index)+'cc'}" >
        {{ subTag }}
      </div>
     </div>
    <!-- 标题 + 描述（可选） -->
    <div v-if="title || desc" class="vp-info">
      <h3 v-if="title" class="vp-title">{{ title }}</h3>
      <p v-if="desc" class="vp-desc">{{ desc }}</p>
    </div>

    <!-- 视频本体 -->
    <video
      ref="videoRef"
      :src="src"
      :poster="poster"
      :autoplay="autoplay"
      :loop="loop ?? true"
      :muted="muted ?? true"
      playsinline
      preload="metadata"
      controls
    />
  </div>
</template>

<style scoped>
.vp-video-player {
  margin: 48px 0;
  border-radius: 16px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  position: relative;
  transition: all 0.3s;
}

/* .vp-video-player:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
} */

.vp-tags-container {
  position: absolute;  /* 容器整体定位到右上角 */
  top: 16px;
  left: 16px;
  display: flex;       /* 横排标签 */
  flex-wrap: wrap;     /* 太多标签自动换行 */
  gap: 4px;            /* 标签间距（左右/上下） */
  z-index: 10;
}

.vp-tag {
  position: relative;  /* 改为相对定位，不再叠加 */
  /* background: #000000cc; */
  color: white;
  padding: 3px 6px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 300;
  backdrop-filter: blur(8px);
}

.vp-info {
  padding: 24px 24px 16px;
}

.vp-title {
  margin: 0 0 8px 0 !important;
  font-size: 1.4em;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.vp-desc {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0 0 16px 16px;
}

/* 暗黑模式自动适配（VitePress 自带变量） */
:global(.dark) .vp-video-player {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}
</style>