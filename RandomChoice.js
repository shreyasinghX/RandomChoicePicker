const tagsEl =document.getElementById('tags');
const textarea=document.getElementById('textarea');
textarea.focus();

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);
    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value='';
        },10)
        randomSelect()
    }
})

function createTags(input){
   const tags=input.split(',').filter(tag=> tag.trim()!=='').map(tag=>tag.trim());

   tags.forEach(tag => {
    const tagEL=document.createElement('span');
    tagEL.classList.add('tag');
    tagEL.innerText=tag;
    tagsEl.appendChild(tagEL);




    
   });
}


function randomSelect(){
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag()
        highlightTag(randomTag)
        setTimeout(()=>{
          unhighlightTag(randomTag)
        },100)

    },100)

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
           const randomTag=pickRandomTag();
           highlightTag(randomTag)
        },100)
    },3000)
    
}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
   tag.classList.add('highlighted')

}

function unhighlightTag(tag){
    tag.classList.remove('highlighted')

}