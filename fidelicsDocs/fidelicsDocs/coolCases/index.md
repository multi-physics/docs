
# 精选案例
如下是一些精选案例，以体现 Fidelics 丰富的建模计算能力。
## 奥迪A4外流
<div class="video-card">
  <video 
  src="/videos/car_fvm.mp4" 
   poster="/videos/car_fvm.jpg" 
  controls 
  preload="metadata"
  width="100%"
  loop 
  muted 
  playsinline>
  您的浏览器不支持视频播放。
</video>
</div>

## 心脏血流动力学
<div class="video-card">
  <video 
  src="/videos/heartFlow.mp4" 
    poster="/videos/heartFlow.jpg" 
  controls 
  preload="metadata"
  width="100%"
  loop 
  muted 
  playsinline>
  您的浏览器不支持视频播放。
</video>
</div>

## 城市社区数字风场
<div class="video-card">
  <video 
  src="/videos/citywind.mp4" 
  poster="/videos/citywind.jpg"
  controls 
  preload="metadata"
  width="100%"
  loop 
  muted 
  playsinline>
  您的浏览器不支持视频播放。
</video>
</div>

## 微米级厚度水润轴承多相流
<div class="video-card">
  <video 
  src="/videos/bearing3d_rhou.mp4" 
  poster="/videos/bearingoil.jpg"
  controls 
  preload="metadata"
  width="100%"
  loop 
  muted 
  playsinline>
  您的浏览器不支持视频播放。
</video>
</div>

## 高压液氧煤油燃烧
<div class="video-card">
  <video 
  src="/videos/Combustion_3D_Fire.mp4" 
    poster="/videos/Combustion_3D_Fire.jpg"
  controls 
  preload="metadata"
  width="100%"
  loop 
  muted 
  playsinline>
  您的浏览器不支持视频播放。
</video>
</div>

## 汽车前窗及侧窗除雾流动
<div class="video-card">
  <video 
  src="/videos/defog_car.mp4" 
      poster="/videos/defog_car.jpg"
  controls 
  preload="metadata"
  width="100%"
  loop 
  muted 
  playsinline>
  您的浏览器不支持视频播放。
</video>
</div>

## 流致振动
<div class="video-card">
  <video 
  src="/videos/beamFSI.mp4" 
  poster="/videos/beamFSI.jpg" 
  controls 
  preload="metadata"
  width="100%"
  loop 
  muted 
  playsinline>
  您的浏览器不支持视频播放。
</video>
</div>


<!-- 自定义样式，放在 .vitepress/theme/index.js 或自定义 CSS 中 -->
<style scoped>
.video-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 10px;
  margin: 16px 0;
  background: var(--vp-c-bg-soft);
}
.video-card video {
  border-radius: 8px;
  margin-top: 4px;
}
</style>

<script>
// 等 DOM 完全加载后再执行（防时机问题）
document.addEventListener('DOMContentLoaded', () => {
  // 用事件委托：监听整个文档的 play 事件，动态处理所有视频
  document.addEventListener('play', (e) => {
    const target = e.target;
    if (target.tagName === 'VIDEO') {
      document.querySelectorAll('video').forEach((video) => {
        if (video !== target) {
          video.pause();
        }
      });
    }
  }, true);  // true = 捕获阶段，确保优先执行
});

// 额外：支持点击视频直接播放（可选，但推荐）
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'VIDEO') {
    e.target.play().catch(() => {});  // 忽略 autoplay 政策错误
  }
});
</script>