<template>
  <Header></Header>
  <tab></tab>
  <router-view/>
</template>

<script>
import Header from './components/header/header.vue'
import Tab from './components/tab/tab.vue'
export default {
  components: {
    Header,
    Tab
  }
}
</script>
<style lang="scss">

</style>
