 async function display(){
        //  speechSynthesis.cancel();
        try{
            //const res=await axios("https://www.official-joke-api.appspot.com/random_joke");//https://official-joke-api.appspot.com/random_joke
            const res=await axios("https://official-joke-api.appspot.com/random_joke");
            console.log(res);
            document.querySelector(".joke").innerHTML=`
            <div class="p-4 bg-secondary border border-dark rounded-4">
            <p class="text-light fs-6"><strong class="fw-bold">Laurel: </strong>${res.data.setup}</p>
            <p class="text-light fs-6"><strong class="fw-bold">Hardy: </strong>${res.data.punchline}</p>
            </div>
            `;
            let utterance1=new SpeechSynthesisUtterance(`Laurel says ${res.data.setup}`);
             utterance1.lang = "en-UK";
             utterance1.pitch = 1.2;
             utterance1.rate = 1.5;
             utterance1.volume = 2;

            speechSynthesis.speak(utterance1);
            speechSynthesis.speak(new SpeechSynthesisUtterance(`Hardy replies ${res.data.punchline}`));
            addEventListener("click",()=>{
                speechSynthesis.cancel();
            }); 
        }
        catch(e){
            document.querySelector(".joke").innerHTML=`
            <p >${e}</p>
            `
        }
    }