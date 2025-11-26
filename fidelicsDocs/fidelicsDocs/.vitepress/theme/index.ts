// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import videoPlayer from "../components/videoPlayer.vue"
import './style2.css'
import 'katex/dist/katex.min.css'
export default {
extends: DefaultTheme,
Layout: () => {
return h(DefaultTheme.Layout, null, {
// https://vitepress.dev/guide/extending-default-theme#layout-slots
})
},
enhanceApp({ app, router, siteData }) {
// 全局注册你的组件，以后所有 .md 里都能直接用
app.component('videoPlayer', videoPlayer)
// ...
}
} satisfies Theme