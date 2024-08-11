<script>
import { RouterLink, RouterView } from 'vue-router'
import TheNav from '@/components/Template/TheNav.vue'
import TheFooter from '@/components/Template/TheFooter.vue'

export default {
  components: {
    TheNav,
    TheFooter,
  },
  watch: {
    // 監聽路由，當路由改變時，動態去改變title
    $route(to) {
      document.title = to.meta.title || 'shopping Cart'
    }
  }
}
</script>

<template>

  <TheNav />

  <RouterView />

  <TheFooter />

</template>

<style scoped></style>
