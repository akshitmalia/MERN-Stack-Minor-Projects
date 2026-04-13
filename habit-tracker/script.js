//localStorage.clear();

let habits = JSON.parse(localStorage.getItem("Habits")) || [];
display();

let data=document.querySelector("#formId");



function add(){
    let text=document.getElementById("habit").value;
    if(text==="") return ;
    else{
        habits.push({
            id:Date.now(),
            text:text,
            completed:false
        })
        document.getElementById("habit").value="";
    }
    display();
}

function deleteHabits(id){
    habits=habits.filter(x=>
        x.id!=id
    )

    display();
}

function toggle(id){
    habits=habits.map(x=>
        x.id===id? {...x,completed:!x.completed} :x
    )
    display();
}

function progress(){
    let total = habits.length;
    let done = habits.filter(habit => habit.completed).length;
    let percent = total === 0 ? 0 : Math.round((done / total) * 100);

    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = percent + "%";
    progressBar.innerText = percent + "%";
}

function reset(){
    habits = [];
    storage();
    display();
}

function display(){
    const list=document.getElementById("habitList");
    list.innerHTML=habits.map(x=>
        `
        <li class="listType m-4">
        <input type="checkbox" ${x.completed? "checked":""} onchange=toggle(${x.id})>

        <span class="${x.completed ? "completed" : ""} text-primary">${x.text}</span>

        <button class="btb btn-success rounded-1" onclick="deleteHabits(${x.id})">Delete</button>
        
        </li>
     
        `
    ).join("");
    storage();
    progress();
}
function storage(){
    localStorage.setItem("Habits",JSON.stringify(habits));
}