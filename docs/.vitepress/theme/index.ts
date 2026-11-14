import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { inBrowser, useRoute } from 'vitepress'
import { watch } from 'vue'
import './kimi.css'

export default {
  extends: DefaultTheme,
  setup() {
    if (!inBrowser) return
    // 每张文档截图点击后放大预览（路由切换后重新挂载）
    const route = useRoute()
    const attach = () => {
      mediumZoom('.vp-doc img', {
        background: 'rgba(15, 17, 20, 0.88)',
        margin: 32,
        scrollOffset: 0,
      })
    }
    watch(
      () => route.path,
      () => setTimeout(attach, 300),
      { immediate: true },
    )
  },
}
