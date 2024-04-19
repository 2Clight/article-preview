const btn= document.querySelector('.share-btn');
const share=document.querySelector('.share');
const bodyElem=document.querySelector("body");
const svgElem=document.querySelector(".share-btn svg")
btn.addEventListener('click', ()=>{
    share.classList.toggle('show-share');
    styling();
    
   
});
bodyElem.addEventListener('click', (event)=>{
    if(!btn.contains(event.target)){
       
        share.classList.remove("show-share");
    }
    styling();
    
});
function styling(){
    if(share.classList.contains('show-share')){
        btn.style.backgroundColor = "hsl(214, 17%, 51%)";
        svgElem.style.fill="white";
    }else{
        btn.style.backgroundColor = "hsl(210, 46%, 95%)";
        svgElem.style.fill="hsl(217, 19%, 35%)"; 
    }
}
