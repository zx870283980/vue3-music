import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { onMounted, onUnmounted, ref } from 'vue'
BScroll.use(ObserveDOM)

export default function userScroll (wrapperRef, options) {
  const scroll = ref(null)
  onMounted(() => {
   const scrollValue = scroll.value = new BScroll(wrapperRef.value, {
       observeDOM: true,
       ...options
     })
     console.log(scrollValue)
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
  return {
    scroll
  }
}
