<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">About service</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Voice assistent Looona version 1.2
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          About service
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Cross-platform',
    description:
      'This service is free and cross-platform as it works when connected to the network.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Safety',
    description:
      'The service uses authorization by JWT Token. Customers data is well protected by encryption algorithms.',
    icon: ScaleIcon,
  },
  {
    name: 'Developers support',
    description:
      `As the project develops, new features will be added. For assistance in project support or suggestions for improvement, application modernization,
      you can contact the developer by contacts.`,
    icon: LightningBoltIcon,
  },
  {
    name: 'Browser support',
    description:
        'Remind you that for the speech recognizer to work correctly, you should only use the latest version of the Google Chrome or Opera.',
    icon: AnnotationIcon,
  },
]

export default defineComponent({
  setup() {
    return {
      features
    }
  }
})
</script>