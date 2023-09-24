/*fetch(url)
.then((res)=>{
    //console.log(res);
    return res.json();
})

.then((data)=>{
    console.log("Fact 1 : ",data.fact);
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log("Fact 2 : ",data.fact);
    })
    .catch((err)=>{
        console.log(err);
    });
})
.catch((err)=>{
    console.log(err);
});*/

let url = "https://catfact.ninja/fact";
let state = false;
let count = 0;
let paraContent = document.querySelector('p');
let btn = document.querySelector('button');

function addFact(){
    if(state == true){
        paraContent.classList.add("fact");
    }
}

async function getApi(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        paraContent.innerHTML = data.fact;
    }
    catch(err){
        console.log(err);
        alert("something went wrong");
    }
}

btn.addEventListener("click",function(){
    count++;
    state = true;
    addFact();
    getApi();

    if(count > 0){
        btn.innerHTML = "Generate more facts";
    }
})
