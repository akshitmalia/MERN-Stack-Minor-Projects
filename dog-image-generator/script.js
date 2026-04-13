
    async function showing(){
        // const res=await axios("https://dog.ceo/api/breeds/image/random");
        try{
        const res=await axios("https://dog.ceo/api/breeds/image/random");
            document.getElementById("change").innerHTML= 
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

