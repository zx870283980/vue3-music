import { onMounted, ref, onUnmounted } from 'vue'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
BScroll.use(Slide)

export default function userSlider(wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)
  onMounted(() => {
    // slider 配置 文档 https://better-scroll.github.io/docs/zh-CN/
   const sliderValue = slider.value = new BScroll(wrapperRef.value, {
        scrollX: true,
        slide: true,
        scrollY: false,
        momentum: false,
        bounce: false,
        probeType: 2,
        click: true
     })
     sliderValue.on('slidePageChanged', (page) => {
      currentPageIndex.value = page.pageX
     })
  })
  onUnmounted(() => {
    slider.value.destroy()
  })
  return {
    slider,
    currentPageIndex
  }
}
