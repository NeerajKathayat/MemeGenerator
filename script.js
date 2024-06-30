
const meme_btn = document.querySelector("#meme-btn")
const meme_img = document.querySelector("#meme-img")
const meme_author = document.querySelector("#meme-author")
const meme_h = document.querySelector("#meme-h")
// const container=document.querySelector(".container")
const load= document.querySelector(".load")

const getMeme=async ()=>{
     meme_h.innerText="";
     meme_img.src="";
     meme_author.innerText="";

    load.style.display="block"

    let data = await fetch("https://meme-api.com/gimme/wholesomememes")
    console.log(data)
     
     data = await data.json()

     const {title,url,author} = data;

     console.log(data)

     meme_h.innerText=title;
     meme_img.src=url;
    //  const p = document.createElement("p")
    //  p.innerText=`Meme by: ${author}`;
    //  container.appendChild(p)
     meme_author.innerText=`Meme by: ${author}`;

     load.style.display="none"
}

getMeme();
meme_btn.addEventListener("click",()=>{
         getMeme()
})

