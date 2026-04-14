
    async function showing(){
  const show = document.getElementById("display_breed");
  show.classList.add("hidden");
  show.innerHTML = ""; // clear multiple images

  const list = document.getElementById("change");
  list.classList.remove("hidden");
  list.innerHTML = ""; // clear old random content

        try{
        const res=await axios("https://dog.ceo/api/breeds/image/random");
            list.innerHTML= 
            `
        <img class="img-fluid rounded-3 border border-dark" src="${res.data.message}" alt="Image Not Available">
            `
            
        }
        catch(err){
            document.getElementById("change").innerHTML= 
            `
        <div class="error">${err.message}</div>
            `
        }

    }

async function searchbreed(){
    const list=document.getElementById("change");
    list.classList.add("hidden");
    const show=document.getElementById("display_breed");
    show.classList.remove("hidden");
    const name=document.getElementById("breed").value.trim();
    if(!name) return;
    document.getElementById("breed").value="";
    list.innerHTML=`
    <p class="text-center text-light">Loading...</p>
    `
    try{
        const results=await axios(`https://dog.ceo/api/breed/${name}/images/random/48`);
        const data=results.data.message;
        console.log(data);
        show.innerHTML=data.map(x=>
          ` <img class="rounded-3 col-lg-3 col-md-4 col-sm-12 border border-3 " src="${x}"></img> `
        ).join("");



    }
    catch(error){
        list.innerHTML=
        `<p>${error}</p>`
    }
}

