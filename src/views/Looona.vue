<template>
  <div>
    <div class="mt-3 flex items-center">
      <button
        type="button"
        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
        @click="speech()"
      >
        Ask Looona
      </button>
      <p class="text-xl text-gray-500 max-w-max ml-2">
        Example: Looona, go to finviz dot com
      </p>
    </div>
    <div class="mt-3 flex items-center">
    <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" @click="talk()">Utter by Looona</button>
    <p class="text-xl text-gray-500 max-w-max ml-2">
      Example: Луна, давай Лермонтова
    </p>
  </div>
  <p id="result"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted,  } from 'vue'
import speakRecognation from '../models/LooonaModel'

export default defineComponent({
  name: 'SignUp',
  setup() {
    const recognizer: speakRecognation = new speakRecognation()

    const speech = () => {
      recognizer.speech()
    }
    const talk = () => {
      recognizer.talk()
    }

    return {speech, talk}
  }
})
</script>