export interface IWindow extends Window {
  webkitSpeechRecognition: any
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
          // document.getElementById('result').innerHTML = this.result[0].transcript
          window.open(`http://www.${url}`, '_blank')
          // setTimeout(() => {
          //   document.getElementById('result').innerHTML = ''
          // }, 5000)
        }
      }
}
