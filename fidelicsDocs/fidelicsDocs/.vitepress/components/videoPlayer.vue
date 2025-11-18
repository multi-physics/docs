<!-- .vitepress/components/VideoPlayer.vue -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  nativeControls: { type: Boolean, default: false },  // Use browser's default controls?
  loop: { type: Boolean, default: false },
  width: { type: Number, default: 640 },
  height: { type: Number, default: 360 },
  autoplay: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  poster: { type: String, default: '' },
  preload: { type: String, default: 'auto' }  // 'none', 'metadata', or 'auto'
})


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
    <div v-if="tag" class="vp-tag">{{ tag }}</div>

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

.vp-video-player:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.vp-tag {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #000000cc;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  z-index: 10;
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