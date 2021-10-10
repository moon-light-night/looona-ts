<template>
  <div>
    <div class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
      A big request to you, with all questions only on weekdays, on weekends the
      developer fills in his own mind and goes to admire the beautiful autumn
      sunset
    </div>
    <div class="mt-10 flex items-center justify-center">
      <div class="w-full" v-for="link in links" :key="link.src">
        <a :href="link.href"
          ><img :src="link.src" :alt="link.name" class="mx-auto"
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const links = [
  {
    name: 'Instagram',
    src: require('@/assets/instagram.png'),
    href: 'https://instagram.com/glxmind?igshid=f7z9cn093uer',
  },
  {
    name: 'Telegram',
    src: require('@/assets/telegram.png'),
    href: 'https://t.me/glxmind',
  },
  {
    name: 'GitHub',
    src: require('@/assets/github.png'),
    href: 'https://github.com/moon-light-night',
  },
  {
    name: 'Skype',
    src: require('@/assets/skype.png'),
    href: 'https://join.skype.com/invite/mpa8oesTx08d',
  },
]

export default defineComponent({
  name: 'Contacts',
  setup() {
    return {
      links,
    }
  },
})
</script>
