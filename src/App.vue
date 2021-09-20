<template>
  <component :is="layout">
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export default defineComponent({
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    MainLayout,
    EmptyLayout
  }
})
</script>

<style src="./assets/tailwind.css"></style>