<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>
<script>
import { ref } from 'vue'
import userScroll from './user-scroll'
export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    const rootRef = ref(null)
    const scroll = userScroll(rootRef, props)
    return {
      rootRef,
      scroll
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
