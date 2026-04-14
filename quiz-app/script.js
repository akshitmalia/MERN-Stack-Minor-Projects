let counter=0;
let score=0;
let currentdataset=[];

async function start(){
    counter=0; score=0;
    const list=document.getElementById("containery");
    list.innerHTML=`<p class="text-center">Loading...</p>`

    try{
        const result=await axios('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple');

        const dataset=result.data.results;
         console.log(dataset); //ADDED INTENTIONALLY
        currentdataset=dataset;
        startquiz(dataset);
    }
    catch(error){

    }
}



function startquiz(){
    const list=document.getElementById("containery");
    list.innerHTML=
    `
    <div id="first">
    <div class="mb-4 text-center border border-dark p-4 rounded-3 bg-danger">
                <h1 class="display-3 fw-bold text-warning">Quiz App</h1>
            <p class="text-light fs-5">This app will generate the score upon submission and give result summary.</p>
    </div>
        <div class="p-4 border border-dark bg-light rounded-3">
            <h2 id="qid">Question</h2>
            <ul>
                <li>
                    <input type="radio" id="a" name="answer">
                    <label for="a" id="a_text">Question</label>
                </li>
                <li>
                    <input type="radio" id="b" name="answer">
                    <label for="b" id="b_text">Question</label>
                </li>
                <li>
                    <input type="radio" id="c" name="answer">
                    <label for="c" id="c_text">Question</label>
                </li>
                <li>
                    <input type="radio" id="d" name="answer">
                    <label for="d" id="d_text">Question</label>
                </li>
            </ul>
        <button class="btn btn-info" onclick="submit()">Submit</button>
        </div>
    </div>
    `
    upload();
}

function upload(){
    deselectAll();
    const options=[currentdataset[counter].incorrect_answers[0],currentdataset[counter].incorrect_answers[1],currentdataset[counter].incorrect_answers[2],currentdataset[counter].correct_answer];
    const randomizedOptions = shuffle(options);
    document.getElementById("qid").textContent=decodeHTML(currentdataset[counter].question);
    document.getElementById("a_text").textContent=decodeHTML(randomizedOptions[0]);
    document.getElementById("b_text").textContent=decodeHTML(randomizedOptions[1]);
    document.getElementById("c_text").textContent=decodeHTML(randomizedOptions[2]);
    document.getElementById("d_text").textContent=decodeHTML(randomizedOptions[3]);

}

function deselectAll(){
    document.getElementById("a").checked=false;
    document.getElementById("b").checked=false;
    document.getElementById("c").checked=false;
    document.getElementById("d").checked=false;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function marked() {
  if (document.getElementById("a").checked) return document.getElementById("a_text").textContent;
  if (document.getElementById("b").checked) return document.getElementById("b_text").textContent;
  if (document.getElementById("c").checked) return document.getElementById("c_text").textContent;
  if (document.getElementById("d").checked) return document.getElementById("d_text").textContent;
}

function decodeHTML(str) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

function submit(){
    const answerMarked=marked();
    if(answerMarked){
        if(answerMarked==decodeHTML(currentdataset[counter].correct_answer)){
            score+=4;
        }
        counter++;
        if(counter<currentdataset.length){
        upload();
        }
        else{
      let solutionsHTML = "";
      for (let i = 0; i < currentdataset.length; i++) {
        solutionsHTML += `
          <div class="p-4">
            <h2 class="">${currentdataset[i].question}</h2>
            <p class="fs-5 text-muted">${currentdataset[i].correct_answer}</p>
          </div>
        `;
      }

            let final=document.getElementById("containery");
            //RESULT SUMMARY TO SHOWCASE
            final.innerHTML=`
        <div class="text-center border border-dark p-4 rounded-3 bg-danger">
            <h1 class="display-3 fw-bold text-warning">Quiz App</h1>
            <p class="text-light fs-5">This app will generate the score upon submission and give result summary.</p>
            <button class="btn btn-info" onclick="start()">Start Again</button>
        </div>

        <div class="mt-4 text-center border border-dark rounded-3 bg-light p-4">
        <h1 class="display-3 fw-bold text-muted">Result Summary</h1>
        <p><strong>Total Questions: </strong>${currentdataset.length}</p>
        <p><strong>Correct Answers: </strong>${score/4}</p>
        <p><strong>Incorrect Answers: </strong>${currentdataset.length-(score/4)}</p>
        <p><strong>Score: </strong>${score}/${currentdataset.length*4}</p>
        </div>

        <div class="mt-4 p-4 rounded-3 bg-light border border-dark ">
        <h1 class="text-primary text-center display-3 fw-bold">Solutions</h1>
        <div>${solutionsHTML}</div>
        
        </div>
        `
        }
    }
    else{
        return;
    }
}

