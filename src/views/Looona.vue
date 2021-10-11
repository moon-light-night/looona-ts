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

<script>
import phrases from '../models/Utterances.ts'

export default {
  data: () => ({
    recognizer: null,
    result: null,
    synth: null,
    utterance: null,
    arr: null,
    lastIndex: null,
    currentResult: ''
  }),
  created() {
    this.recognizer = new window.webkitSpeechRecognition()
    this.recognizer.interimResults = false
  },
  unmounted() {
    this.recognizer = null
    this.arr = null
    this.lastIndex = null
    this.result = null
  },
  methods: {
    speech() {
      this.recognizer.start()
      this.recognizer.onresult = function(event) {
        this.result = event.results[event.resultIndex]
        this.arr = this.result[0].transcript.split(' ')
        document.getElementById('result').innerHTML = this.result[0].transcript
        this.lastIndex = this.arr[this.arr.length - 1]
        window.open(`http://www.${this.lastIndex}`, '_blank')
        setTimeout(() => {
          document.getElementById('result').innerHTML = ''
        }, 5000)
      }
    },
    talk() {
      this.recognizer.start()
      this.recognizer.onresult = function(event) {
        this.result = event.results[event.resultIndex]
        document.getElementById('result').innerHTML = this.result[0].transcript
        setTimeout(() => {
          document.getElementById('result').innerHTML = ''
        }, 5000)
        if (
          this.result.isFinal &&
          this.result[0].transcript.toLowerCase() == 'луна привет'
        ) {
          this.synth = window.speechSynthesis
          this.utterance = new SpeechSynthesisUtterance(phrases.hello)
          this.synth.speak(this.utterance)
        }
        else {
          console.log(
            'Промежуточный результат: ',
            this.result[0].transcript.toLowerCase()
          )
        }
        if (
          this.result.isFinal &&
          this.result[0].transcript.toLowerCase() == 'луна давай лермонтова'
        ) {
          this.synth = window.speechSynthesis
          this.utterance = new SpeechSynthesisUtterance(phrases.lermontov)
          this.synth.speak(this.utterance)
        }
        if (
          this.result.isFinal &&
          this.result[0].transcript.toLowerCase() == 'луна давай мачете'
        ) {
          this.synth = window.speechSynthesis
          this.utterance = new SpeechSynthesisUtterance(phrases.machete)
          this.synth.speak(this.utterance)
        }
        if (
          this.result.isFinal &&
          this.result[0].transcript.toLowerCase() == 'луна ты всего лишь браузерный скрипт' ||
          this.result[0].transcript.toLowerCase() == 'луна ты всего-лишь браузерный скрипт'
        ) {
          this.synth = window.speechSynthesis
          this.utterance = new SpeechSynthesisUtterance(phrases.serzh)
          this.synth.speak(this.utterance)
        }
      }
    },
  },
}
</script>