    // export interface Looona extends Window{
    //     webkitSpeechRecognition: any;
    // }
    // interface obj {
    //     recognizer: any
    //     }
    // const a:obj = {
    //     recognizer: <Looona><unknown>window
    //     const recognition
    // }

    //  export default class speakRecognation{
    //     constructor(){

    //         const {webkitSpeechRecognition}: Looona = <Looona><unknown>window;
    //         const recognition = new webkitSpeechRecognition();
    //         recognition.interimResults = true;

    //         // input.addEventListener("click", function(){
    //         //     audio.play();
    //         //     recognition.start();
    //         //     });
    //         show: () => {
    //             console.log('show')
    //         }

    //         recognition.onstart = function () {
    //             recognition.recognizing = true;
    //         };

    //         // recognition.onresult = function (event) {
    //         // var interim_transcript = '';
    //         //     for (var i = event.resultIndex; i < event.results.length; ++i) {
    //         //         if (event.results[i].isFinal) {
    //         //             var result = event.results[i][0].transcript;
    //         //             input.value = result;
    //         //           //  input.disable=false;
    //         //             Program.execute(result);
    //         //             recognition.stop();

    //         //         } else {
    //         //             interim_transcript += event.results[i][0].transcript;
    //         //             input.value = interim_transcript;
    //         //         }
    //         //         }
    //         // };

    //     //    recognition.onerror = function (event) {
    //     //         input.value = "Something went wrong. Try reloading the page.";
    //     //     }

    //     //     recognition.onnomatch = function (event) {
    //     //         input.value = "no match";
    //     //     }

    //     //    input.addEventListener("blur", function(e) {
    //     //         recognition.stop();
    //     //         input.value='';
    //     //     });

    //     //     input.addEventListener('keypress', function (e) {
    //     //         recognition.stop();
    //     //         var key = e.which || e.keyCode;
    //     //         if (key === 13) { // 13 is enter
    //     //             Program.execute(input.value);
    //     //         }
    //     //     });
    //     }
    // }