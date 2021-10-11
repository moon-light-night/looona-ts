<template>
  <component :is="layout">
  </component>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export default defineComponent({
  components: {
    MainLayout,
    EmptyLayout
  },
  setup() {
    const route = useRoute()

    const layout = computed(() => {
      return (route.meta.layout || 'empty') + '-layout'
    })

    return {
      layout
    }
  }
})
</script>

<style src="./assets/tailwind.css"></style>