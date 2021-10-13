import phrases from '../models/Utterances'

export interface IWindow extends Window {
  webkitSpeechRecognition: any
  SpeechSynthesisUtterance: any
  SpeechSynthesis: any
}

export default class speakRecognation {
  speech() {
    const { webkitSpeechRecognition } = <IWindow>(<unknown>window)
    const recognition = new webkitSpeechRecognition()
    recognition.interimResults = false
    recognition.start()

    recognition.onstart = () => (recognition.recognizing = true)

    recognition.onresult = (event: {
      results: { [x: string]: any }
      resultIndex: string | number
    }) => {
      const result = event.results[event.resultIndex]
      const arr = result[0].transcript.split(' ')
      const url = arr[arr.length - 1]
      window.open(`http://www.${url}`, '_blank')
    }
  }

  talk() {
    const { webkitSpeechRecognition } = <IWindow>(<unknown>window)
    const { SpeechSynthesisUtterance } = <IWindow>(<unknown>window)

    const recognition = new webkitSpeechRecognition()
    recognition.interimResults = false
    recognition.start()

    recognition.onstart = () => (recognition.recognizing = true)

    recognition.onresult = (event: {
      results: { [x: string]: any }
      resultIndex: string | number
    }) => {
      const result = event.results[event.resultIndex]
      if (result.isFinal) {
        switch (result[0].transcript.toLowerCase()) {
          case 'луна привет':
            (<any>window).speechSynthesis.speak(
              new SpeechSynthesisUtterance(phrases.hello)
            )
            break
          case 'луна давай лермонтова':
            (<any>window).speechSynthesis.speak(
              new SpeechSynthesisUtterance(phrases.lermontov)
            )
            break
          case 'луна давай мачете':
            (<any>window).speechSynthesis.speak(
              new SpeechSynthesisUtterance(phrases.machete)
            )
            break
          case 'луна ты всего лишь браузерный скрипт' ||
            'луна ты всего-лишь браузерный скрипт':
            (<any>window).speechSynthesis.speak(
              new SpeechSynthesisUtterance(phrases.serzh)
            )
            break

          default:
            console.log('default')
            break
        }
      }
    }
  }
}
